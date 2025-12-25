import React, { useState, useEffect, useRef } from "react";
import "./MapRenderer.css";

const MapRenderer = ({ type, visitedData, theme }) => {
    const [geoData, setGeoData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, data: null });

    // URLs for GeoJSON data
    const WORLD_GEOJSON_URL = "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";
    // Local Vietnam GeoJSON
    const VIETNAM_GEOJSON_URL = process.env.PUBLIC_URL + "/adm1_vietnam_full.geojson";

    // Dimensions based on map type
    const width = type === "vietnam" ? 600 : 800;
    const height = type === "vietnam" ? 800 : 450;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const url = type === "world" ? WORLD_GEOJSON_URL : VIETNAM_GEOJSON_URL;
                const response = await fetch(url);
                if (!response.ok) throw new Error("Failed to load map data");
                const data = await response.json();
                setGeoData(data);
            } catch (err) {
                console.error("Error loading map:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [type]);

    // Simple projection logic (Equirectangular approximation)
    const project = (lon, lat) => {
        if (type === "vietnam") {
            // Vietnam Bounds: ~102E - 110E, ~8N - 23.5N
            const lonMin = 102;
            const lonMax = 110;
            const latMin = 8.0;
            const latMax = 23.5;

            // To preserve shape (S-shape), we need to maintain aspect ratio.
            const lonRange = lonMax - lonMin;
            const latRange = latMax - latMin;

            // Determine scale to fit the container height (primary constraint for Vietnam)
            const scaleY = height / latRange;
            const scale = scaleY * 0.9; // 90% fit to leave some padding

            // Center the map horizontally, but shift slightly left to leave room for badges on right
            // Map effective width = lonRange * scale
            // Centered xOffset would be: (width - (lonRange * scale)) / 2
            // Let's shift it left: xOffset - 50
            const xOffset = (width - (lonRange * scale)) / 2 - 50;
            const yOffset = (height - (latRange * scale)) / 2;

            const x = xOffset + (lon - lonMin) * scale;
            // Invert Y because SVG coordinates go top-down
            const y = height - (yOffset + (lat - latMin) * scale);

            return { x, y };
        } else {
            // World Map
            const x = (lon + 180) * (width / 360);
            const y = (height / 2) - (width * Math.log(Math.tan((Math.PI / 4) + (lat * Math.PI / 360)))) / (2 * Math.PI); // Mercator-ish
            // Simple Equirectangular for robustness if Math fails
            // const y = height - ((lat + 90) / 180) * height;

            // Safety for Mercator posts
            const validY = Math.max(0, Math.min(height, y));
            return { x, y: validY };
        }
    };

    const pathGenerator = (feature) => {
        if (!feature.geometry) return "";
        const type = feature.geometry.type;
        const coords = feature.geometry.coordinates;

        const generatePath = (points) => {
            if (!points || points.length === 0) return "";
            let d = "";
            points.forEach((point, index) => {
                const { x, y } = project(point[0], point[1]);
                if (isNaN(x) || isNaN(y)) return;
                d += (index === 0 ? "M" : "L") + `${x},${y}`;
            });
            d += "Z";
            return d;
        };

        if (type === "Polygon") {
            return coords.map(ring => generatePath(ring)).join(" ");
        } else if (type === "MultiPolygon") {
            return coords.map(polygon => polygon.map(ring => generatePath(ring)).join(" ")).join(" ");
        }
        return "";
    };

    // Generic mapping from 2-letter (user data) to 3-letter (GeoJSON) ISO codes for common countries
    const iso2to3 = {
        "AF": "AFG", "AX": "ALA", "AL": "ALB", "DZ": "DZA", "AS": "ASM", "AD": "AND", "AO": "AGO", "AI": "AIA", "AQ": "ATA", "AG": "ATG", "AR": "ARG", "AM": "ARM", "AW": "ABW", "AU": "AUS", "AT": "AUT", "AZ": "AZE",
        "BS": "BHS", "BH": "BHR", "BD": "BGD", "BB": "BRB", "BY": "BLR", "BE": "BEL", "BZ": "BLZ", "BJ": "BEN", "BM": "BMU", "BT": "BTN", "BO": "BOL", "BA": "BIH", "BW": "BWA", "BV": "BVT", "BR": "BRA", "IO": "IOT", "BN": "BRN", "BG": "BGR", "BF": "BFA", "BI": "BDI",
        "KH": "KHM", "CM": "CMR", "CA": "CAN", "CV": "CPV", "KY": "CYM", "CF": "CAF", "TD": "TCD", "CL": "CHL", "CN": "CHN", "CX": "CXR", "CC": "CCK", "CO": "COL", "KM": "COM", "CG": "COG", "CD": "COD", "CK": "COK", "CR": "CRI", "CI": "CIV", "HR": "HRV", "CU": "CUB", "CY": "CYP", "CZ": "CZE",
        "DK": "DNK", "DJ": "DJI", "DM": "DMA", "DO": "DOM", "EC": "ECU", "EG": "EGY", "SV": "SLV", "GQ": "GNQ", "ER": "ERI", "EE": "EST", "ET": "ETH", "FK": "FLK", "FO": "FRO", "FJ": "FJI", "FI": "FIN", "FR": "FRA", "GF": "GUF", "PF": "PYF", "TF": "ATF", "GA": "GAB", "GM": "GMB", "GE": "GEO", "DE": "DEU", "GH": "GHA", "GI": "GIB", "GR": "GRC", "GL": "GRL", "GD": "GRD", "GP": "GLP", "GU": "GUM", "GT": "GTM", "GG": "GGY", "GN": "GIN", "GW": "GNB", "GY": "GUY", "HT": "HTI", "HM": "HMD", "VA": "VAT", "HN": "HND", "HK": "HKG", "HU": "HUN", "IS": "ISL", "IN": "IND", "ID": "IDN", "IR": "IRN", "IQ": "IRQ", "IE": "IRL", "IM": "IMN", "IL": "ISR", "IT": "ITA", "JM": "JAM", "JP": "JPN", "JE": "JEY", "JO": "JOR", "KZ": "KAZ", "KE": "KEN", "KI": "KIR", "KP": "PRK", "KR": "KOR", "KW": "KWT", "KG": "KGZ", "LA": "LAO", "LV": "LVA", "LB": "LBN", "LS": "LSO", "LR": "LBR", "LY": "LBY", "LI": "LIE", "LT": "LTU", "LU": "LUX", "MO": "MAC", "MK": "MKD", "MG": "MDG", "MW": "MWI", "MY": "MYS", "MV": "MDV", "ML": "MLI", "MT": "MLT", "MH": "MHL", "MQ": "MTQ", "MR": "MRT", "MU": "MUS", "YT": "MYT", "MX": "MEX", "FM": "FSM", "MD": "MDA", "MC": "MCO", "MN": "MNG", "ME": "MNE", "MS": "MSR", "MA": "MAR", "MZ": "MOZ", "MM": "MMR", "NA": "NAM", "NR": "NRU", "NP": "NPL", "NL": "NLD", "AN": "ANT", "NC": "NCL", "NZ": "NZL", "NI": "NIC", "NE": "NER", "NG": "NGA", "NU": "NIU", "NF": "NFK", "MP": "MNP", "NO": "NOR", "OM": "OMN", "PK": "PAK", "PW": "PLW", "PS": "PSE", "PA": "PAN", "PG": "PNG", "PY": "PRY", "PE": "PER", "PH": "PHL", "PN": "PCN", "PL": "POL", "PT": "PRT", "PR": "PRI", "QA": "QAT", "RE": "REU", "RO": "ROU", "RU": "RUS", "RW": "RWA", "BL": "BLM", "SH": "SHN", "KN": "KNA", "LC": "LCA", "MF": "MAF", "PM": "SPM", "VC": "VCT", "WS": "WSM", "SM": "SMR", "ST": "STP", "SA": "SAU", "SN": "SEN", "RS": "SRB", "SC": "SYC", "SL": "SLE", "SG": "SGP", "SK": "SVK", "SI": "SVN", "SB": "SLB", "SO": "SOM", "ZA": "ZAF", "GS": "SGS", "ES": "ESP", "LK": "LKA", "SD": "SDN", "SR": "SUR", "SJ": "SJM", "SZ": "SWZ", "SE": "SWE", "CH": "CHE", "SY": "SYR", "TW": "TWN", "TJ": "TJK", "TZ": "TZA", "TH": "THA", "TL": "TLS", "TG": "TGO", "TK": "TKL", "TO": "TON", "TT": "TTO", "TN": "TUN", "TR": "TUR", "TM": "TKM", "TC": "TCA", "TV": "TUV", "UG": "UGA", "UA": "UKR", "AE": "ARE", "GB": "GBR", "US": "USA", "UM": "UMI", "UY": "URY", "UZ": "UZB", "VU": "VUT", "VE": "VEN", "VN": "VNM", "VG": "VGB", "VI": "VIR", "WF": "WLF", "EH": "ESH", "YE": "YEM", "ZM": "ZMB", "ZW": "ZWE"
    };

    const getVisitInfo = (feature) => {
        if (!visitedData) return null;
        // Check standard ID, Name, ISO, or Vietnam-specific level1_id
        let id = feature.id || feature.properties?.name || feature.properties?.ISO_A3;
        let localId = feature.properties?.level1_id; // Specific for Vietnam Adm1

        // Normalize matching
        const visit = visitedData.find(v => {
            // Check ID match (exact)
            if (v.id === id) return true;

            // Check Local ID (Vietnam provinces)
            if (localId && v.id === localId) return true;

            // Check ID match (2 vs 3 letter conversion)
            if (iso2to3[v.id] === id) return true;

            // Check Name match
            if (v.name === feature.properties?.name) return true;
            // Special case for Vietnam map where ID might be province code
            if (feature.properties?.id === v.id) return true;
            return false;
        });
        return visit;
    };

    const [selectedLocation, setSelectedLocation] = useState(null);

    const handleMouseEnter = (e, feature, visitInfo) => {
        if (!visitInfo) {
            setSelectedLocation(null);
            return;
        }
        setSelectedLocation({
            name: visitInfo.name || feature.properties.name,
            photos: visitInfo.photos,
            year: visitInfo.year,
            note: visitInfo.note
        });
    };

    const handleMouseLeave = () => {
        // Optional: clear selection or keep last selected?
        // Keeping it clear for now to show default state
        setSelectedLocation(null);
    };

    if (loading) return <div className="map-loading">Loading Map...</div>;
    if (error) return <div className="map-error">Error loading map: {error}. <br />Please ensure internet access or provide local GeoJSON.</div>;

    const getFillColor = (isVisited) => {
        if (isVisited) {
            return theme.accentColor || "#FFD700";
        }
        return theme.imageHighlight || "rgba(255,255,255,0.1)";
    };

    return (
        <div className={`map-container ${type === 'vietnam' ? 'map-portrait' : 'map-landscape'}`}>
            <svg viewBox={`0 0 ${width} ${height}`} className="map-svg">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: theme.imageDark, stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: theme.cardBackground, stopOpacity: 1 }} />
                    </linearGradient>
                </defs>

                {geoData && geoData.features.map((feature, i) => {
                    const visitInfo = getVisitInfo(feature);
                    const isVisited = !!visitInfo;
                    const pathData = pathGenerator(feature);

                    if (!pathData) return null;

                    return (
                        <path
                            key={i}
                            d={pathData}
                            className={`map-path ${isVisited ? "visited" : ""}`}
                            onMouseEnter={(e) => {
                                if (isVisited) {
                                    // Position fixed at cursor coordinates
                                    setSelectedLocation({
                                        name: visitInfo.name || feature.properties.name,
                                        x: e.clientX + 20,
                                        y: e.clientY + 20,
                                        ...visitInfo
                                    });

                                }
                            }}
                            onMouseLeave={() => setSelectedLocation(null)}
                            stroke={theme.body}
                            strokeWidth="0.5"
                            fill={isVisited ? (theme.accentColor || "#E3405F") : "#3a3a3a"}
                            style={{
                                fill: getFillColor(isVisited),
                                cursor: isVisited ? "pointer" : "default",
                                transition: "all 0.3s ease"
                            }}
                        />
                    );
                })}
            </svg>

            {/* Floating Stats Badge */}
            <div className="map-stats-badge">
                <div className="stats-header">
                    <span className="stats-title">
                        {type === "world" ? "World Explored" : "Vietnam Explored"}
                    </span>
                    <span className="stats-percent" style={{ color: theme.accentColor }}>
                        {Math.round((visitedData.length / (type === "world" ? 195 : 63)) * 100)}%
                    </span>
                </div>
                <div className="stats-detail">
                    {visitedData.length} / {type === "world" ? "195 Countries" : "63 Provinces"}
                </div>
                <div className="stats-progress-bg">
                    <div
                        className="stats-progress-fill"
                        style={{
                            width: `${(visitedData.length / (type === "world" ? 195 : 63)) * 100}%`,
                            backgroundColor: theme.accentColor
                        }}
                    ></div>
                </div>
            </div>

            {/* Floating Sovereignty Badges for Vietnam */}
            {type === "vietnam" && (
                <div className="sovereignty-badges">
                    <div className="sovereignty-badge" style={{ borderColor: theme.accentColor, color: theme.text }}>
                        <span className="badge-icon">🏝️</span>
                        <div className="badge-text">
                            <strong>Hoàng Sa</strong>
                            <small>Paracel Islands</small>
                        </div>
                    </div>
                    <div className="sovereignty-badge" style={{ borderColor: theme.accentColor, color: theme.text }}>
                        <span className="badge-icon">🏝️</span>
                        <div className="badge-text">
                            <strong>Trường Sa</strong>
                            <small>Spratly Islands</small>
                        </div>
                    </div>
                </div>
            )}

            {/* Dynamic Location Preview Card */}
            <div className={`location-card ${selectedLocation ? "active" : ""}`}
                style={selectedLocation ? {
                    left: selectedLocation.x,
                    top: selectedLocation.y
                } : {}}>
                {selectedLocation && (
                    <>
                        <div className="location-header">
                            <h3 style={{ color: theme.text }}>{selectedLocation.name}</h3>
                            {selectedLocation.year &&
                                <span className="location-year" style={{ backgroundColor: theme.accentColor }}>
                                    {selectedLocation.year}
                                </span>
                            }
                        </div>
                        {selectedLocation.note &&
                            <p className="location-note" style={{ color: theme.secondaryText }}>
                                {selectedLocation.note}
                            </p>
                        }

                        {selectedLocation.photos && selectedLocation.photos.length > 0 ? (
                            <div className="location-gallery-preview">
                                <div className="main-preview-image">
                                    <img
                                        src={selectedLocation.photos[0]}
                                        alt={selectedLocation.name}
                                        style={{ borderColor: theme.accentColor }}
                                    />
                                    {selectedLocation.photos.length > 1 && (
                                        <div className="more-photos-badge">+{selectedLocation.photos.length - 1}</div>
                                    )}
                                </div>
                                <p className="gallery-hint" style={{ color: theme.secondaryText }}>
                                    Click map to view all photos
                                </p>
                            </div>
                        ) : (
                            <div className="no-photos">
                                <span style={{ color: theme.secondaryText }}>No photos available</span>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>



    );
};

export default MapRenderer;
