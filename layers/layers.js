ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:7844").setExtent([144.694048, -37.385796, 144.767037, -37.331651]);
var wms_layers = [];


        var lyr_ESRISatelliteArcGISWorld_Imagery_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_StateBoundary_1 = new ol.format.GeoJSON();
var features_StateBoundary_1 = format_StateBoundary_1.readFeatures(json_StateBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_StateBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StateBoundary_1.addFeatures(features_StateBoundary_1);
var lyr_StateBoundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StateBoundary_1, 
                style: style_StateBoundary_1,
                popuplayertitle: "State Boundary",
                interactive: false,
                title: '<img src="styles/legend/StateBoundary_1.png" /> State Boundary'
            });
var format_AustralianCapitalTerritory_2 = new ol.format.GeoJSON();
var features_AustralianCapitalTerritory_2 = format_AustralianCapitalTerritory_2.readFeatures(json_AustralianCapitalTerritory_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_AustralianCapitalTerritory_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AustralianCapitalTerritory_2.addFeatures(features_AustralianCapitalTerritory_2);
var lyr_AustralianCapitalTerritory_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AustralianCapitalTerritory_2, 
                style: style_AustralianCapitalTerritory_2,
                popuplayertitle: "Australian Capital Territory",
                interactive: false,
                title: '<img src="styles/legend/AustralianCapitalTerritory_2.png" /> Australian Capital Territory'
            });
var format_NorthernTerritory_3 = new ol.format.GeoJSON();
var features_NorthernTerritory_3 = format_NorthernTerritory_3.readFeatures(json_NorthernTerritory_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_NorthernTerritory_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NorthernTerritory_3.addFeatures(features_NorthernTerritory_3);
var lyr_NorthernTerritory_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NorthernTerritory_3, 
                style: style_NorthernTerritory_3,
                popuplayertitle: "Northern Territory",
                interactive: false,
                title: '<img src="styles/legend/NorthernTerritory_3.png" /> Northern Territory'
            });
var format_Tasmania_4 = new ol.format.GeoJSON();
var features_Tasmania_4 = format_Tasmania_4.readFeatures(json_Tasmania_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_Tasmania_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tasmania_4.addFeatures(features_Tasmania_4);
var lyr_Tasmania_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tasmania_4, 
                style: style_Tasmania_4,
                popuplayertitle: "Tasmania",
                interactive: false,
                title: '<img src="styles/legend/Tasmania_4.png" /> Tasmania'
            });
var format_SouthAustralia_5 = new ol.format.GeoJSON();
var features_SouthAustralia_5 = format_SouthAustralia_5.readFeatures(json_SouthAustralia_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_SouthAustralia_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SouthAustralia_5.addFeatures(features_SouthAustralia_5);
var lyr_SouthAustralia_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SouthAustralia_5, 
                style: style_SouthAustralia_5,
                popuplayertitle: "South Australia",
                interactive: false,
                title: '<img src="styles/legend/SouthAustralia_5.png" /> South Australia'
            });
var format_NewSouthWales_6 = new ol.format.GeoJSON();
var features_NewSouthWales_6 = format_NewSouthWales_6.readFeatures(json_NewSouthWales_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_NewSouthWales_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NewSouthWales_6.addFeatures(features_NewSouthWales_6);
var lyr_NewSouthWales_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NewSouthWales_6, 
                style: style_NewSouthWales_6,
                popuplayertitle: "New South Wales",
                interactive: false,
                title: '<img src="styles/legend/NewSouthWales_6.png" /> New South Wales'
            });
var format_WesternAustralia_7 = new ol.format.GeoJSON();
var features_WesternAustralia_7 = format_WesternAustralia_7.readFeatures(json_WesternAustralia_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_WesternAustralia_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WesternAustralia_7.addFeatures(features_WesternAustralia_7);
var lyr_WesternAustralia_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WesternAustralia_7, 
                style: style_WesternAustralia_7,
                popuplayertitle: "Western Australia",
                interactive: false,
                title: '<img src="styles/legend/WesternAustralia_7.png" /> Western Australia'
            });
var format_Queensland_8 = new ol.format.GeoJSON();
var features_Queensland_8 = format_Queensland_8.readFeatures(json_Queensland_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_Queensland_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Queensland_8.addFeatures(features_Queensland_8);
var lyr_Queensland_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Queensland_8, 
                style: style_Queensland_8,
                popuplayertitle: "Queensland",
                interactive: false,
                title: '<img src="styles/legend/Queensland_8.png" /> Queensland'
            });
var format_Victoria_9 = new ol.format.GeoJSON();
var features_Victoria_9 = format_Victoria_9.readFeatures(json_Victoria_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_Victoria_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Victoria_9.addFeatures(features_Victoria_9);
var lyr_Victoria_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Victoria_9, 
                style: style_Victoria_9,
                popuplayertitle: "Victoria",
                interactive: false,
                title: '<img src="styles/legend/Victoria_9.png" /> Victoria'
            });
var format_ScottParkGroup_10 = new ol.format.GeoJSON();
var features_ScottParkGroup_10 = format_ScottParkGroup_10.readFeatures(json_ScottParkGroup_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_ScottParkGroup_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ScottParkGroup_10.addFeatures(features_ScottParkGroup_10);
var lyr_ScottParkGroup_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ScottParkGroup_10, 
                style: style_ScottParkGroup_10,
                popuplayertitle: "Scott Park Group",
                interactive: true,
                title: '<img src="styles/legend/ScottParkGroup_10.png" /> Scott Park Group'
            });
var format_Metricon_11 = new ol.format.GeoJSON();
var features_Metricon_11 = format_Metricon_11.readFeatures(json_Metricon_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_Metricon_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Metricon_11.addFeatures(features_Metricon_11);
var lyr_Metricon_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Metricon_11, 
                style: style_Metricon_11,
                popuplayertitle: "Metricon",
                interactive: true,
                title: '<img src="styles/legend/Metricon_11.png" /> Metricon'
            });
var format_MetriconVictoria_12 = new ol.format.GeoJSON();
var features_MetriconVictoria_12 = format_MetriconVictoria_12.readFeatures(json_MetriconVictoria_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_MetriconVictoria_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MetriconVictoria_12.addFeatures(features_MetriconVictoria_12);
var lyr_MetriconVictoria_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MetriconVictoria_12, 
                style: style_MetriconVictoria_12,
                popuplayertitle: "Metricon (Victoria)",
                interactive: true,
                title: '<img src="styles/legend/MetriconVictoria_12.png" /> Metricon (Victoria)'
            });
var format_Henley_13 = new ol.format.GeoJSON();
var features_Henley_13 = format_Henley_13.readFeatures(json_Henley_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_Henley_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Henley_13.addFeatures(features_Henley_13);
var lyr_Henley_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Henley_13, 
                style: style_Henley_13,
                popuplayertitle: "Henley",
                interactive: true,
                title: '<img src="styles/legend/Henley_13.png" /> Henley'
            });
var format_GrangeSites_14 = new ol.format.GeoJSON();
var features_GrangeSites_14 = format_GrangeSites_14.readFeatures(json_GrangeSites_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_GrangeSites_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GrangeSites_14.addFeatures(features_GrangeSites_14);
var lyr_GrangeSites_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GrangeSites_14, 
                style: style_GrangeSites_14,
                popuplayertitle: "Grange Sites",
                interactive: true,
                title: '<img src="styles/legend/GrangeSites_14.png" /> Grange Sites'
            });
var group_GrangeSites = new ol.layer.Group({
                                layers: [lyr_GrangeSites_14,],
                                fold: "open",
                                title: "Grange Sites"});
var group_Builders = new ol.layer.Group({
                                layers: [lyr_ScottParkGroup_10,lyr_Metricon_11,lyr_MetriconVictoria_12,lyr_Henley_13,],
                                fold: "open",
                                title: "Builders"});
var group_BaseLayersBoundaries = new ol.layer.Group({
                                layers: [lyr_StateBoundary_1,lyr_AustralianCapitalTerritory_2,lyr_NorthernTerritory_3,lyr_Tasmania_4,lyr_SouthAustralia_5,lyr_NewSouthWales_6,lyr_WesternAustralia_7,lyr_Queensland_8,lyr_Victoria_9,],
                                fold: "open",
                                title: "Base Layers (Boundaries)"});

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_StateBoundary_1.setVisible(true);lyr_AustralianCapitalTerritory_2.setVisible(true);lyr_NorthernTerritory_3.setVisible(true);lyr_Tasmania_4.setVisible(true);lyr_SouthAustralia_5.setVisible(true);lyr_NewSouthWales_6.setVisible(true);lyr_WesternAustralia_7.setVisible(true);lyr_Queensland_8.setVisible(true);lyr_Victoria_9.setVisible(true);lyr_ScottParkGroup_10.setVisible(false);lyr_Metricon_11.setVisible(false);lyr_MetriconVictoria_12.setVisible(false);lyr_Henley_13.setVisible(true);lyr_GrangeSites_14.setVisible(true);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,group_BaseLayersBoundaries,group_Builders,group_GrangeSites];
lyr_StateBoundary_1.set('fieldAliases', {'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'CHG_FLAG21': 'CHG_FLAG21', 'CHG_LBL21': 'CHG_LBL21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM21': 'AREASQKM21', 'LOCI_URI21': 'LOCI_URI21', });
lyr_AustralianCapitalTerritory_2.set('fieldAliases', {'fid': 'fid', 'SAL_CODE21': 'SAL_CODE21', 'SAL_NAME21': 'SAL_NAME21', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM21': 'AREASQKM21', 'LOCI_URI21': 'LOCI_URI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_NorthernTerritory_3.set('fieldAliases', {'fid': 'fid', 'SAL_CODE21': 'SAL_CODE21', 'SAL_NAME21': 'SAL_NAME21', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM21': 'AREASQKM21', 'LOCI_URI21': 'LOCI_URI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Tasmania_4.set('fieldAliases', {'fid': 'fid', 'SAL_CODE21': 'SAL_CODE21', 'SAL_NAME21': 'SAL_NAME21', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM21': 'AREASQKM21', 'LOCI_URI21': 'LOCI_URI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SouthAustralia_5.set('fieldAliases', {'fid': 'fid', 'SAL_CODE21': 'SAL_CODE21', 'SAL_NAME21': 'SAL_NAME21', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM21': 'AREASQKM21', 'LOCI_URI21': 'LOCI_URI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_NewSouthWales_6.set('fieldAliases', {'fid': 'fid', 'LGA_CODE24': 'LGA_CODE24', 'LGA_NAME24': 'LGA_NAME24', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM': 'AREASQKM', 'LOCI_URI21': 'LOCI_URI21', });
lyr_WesternAustralia_7.set('fieldAliases', {'fid': 'fid', 'SAL_CODE21': 'SAL_CODE21', 'SAL_NAME21': 'SAL_NAME21', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM21': 'AREASQKM21', 'LOCI_URI21': 'LOCI_URI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Queensland_8.set('fieldAliases', {'fid': 'fid', 'SAL_CODE21': 'SAL_CODE21', 'SAL_NAME21': 'SAL_NAME21', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM21': 'AREASQKM21', 'LOCI_URI21': 'LOCI_URI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Victoria_9.set('fieldAliases', {'fid': 'fid', 'SAL_CODE21': 'SAL_CODE21', 'SAL_NAME21': 'SAL_NAME21', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM21': 'AREASQKM21', 'LOCI_URI21': 'LOCI_URI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ScottParkGroup_10.set('fieldAliases', {'fid': 'fid', 'LOC_NAME': 'LOC_NAME', 'STATE': 'STATE', 'builder': 'builder', 'market': 'market', });
lyr_Metricon_11.set('fieldAliases', {'fid': 'fid', 'LOC_NAME': 'LOC_NAME', 'Builder': 'Builder', 'Market Type': 'Market Type', });
lyr_MetriconVictoria_12.set('fieldAliases', {'fid': 'fid', 'LOC_NAME': 'LOC_NAME', 'Builder': 'Builder', 'Market Type': 'Market Type', });
lyr_Henley_13.set('fieldAliases', {'LOC_NAME': 'LOC_NAME', 'STATE': 'STATE', 'LGA': 'LGA', 'Builder_2': 'Builder_2', 'Grange_Pro': 'Grange_Pro', 'Market_Typ': 'Market_Typ', });
lyr_GrangeSites_14.set('fieldAliases', {'fid': 'fid', 'LC_PLY_PID': 'LC_PLY_PID', 'LOC_PID': 'LOC_PID', 'DT_CREATE': 'DT_CREATE', 'LOC_NAME': 'LOC_NAME', 'LOC_CLASS': 'LOC_CLASS', 'STATE': 'STATE', 'SA1_CODE21': 'SA1_CODE21', 'CHG_FLAG21': 'CHG_FLAG21', 'CHG_LBL21': 'CHG_LBL21', 'SA2_CODE21': 'SA2_CODE21', 'SA2_NAME21': 'SA2_NAME21', 'SA3_CODE21': 'SA3_CODE21', 'SA3_NAME21': 'SA3_NAME21', 'SA4_CODE21': 'SA4_CODE21', 'SA4_NAME21': 'SA4_NAME21', 'GCC_CODE21': 'GCC_CODE21', 'GCC_NAME21': 'GCC_NAME21', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM21': 'AREASQKM21', 'LOCI_URI21': 'LOCI_URI21', 'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'POSTCODE': 'POSTCODE', 'Shape.area': 'Shape.area', 'Shape.len': 'Shape.len', 'layer': 'layer', 'path': 'path', 'Locality': 'Locality', });
lyr_StateBoundary_1.set('fieldImages', {'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'CHG_FLAG21': 'TextEdit', 'CHG_LBL21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM21': 'TextEdit', 'LOCI_URI21': 'TextEdit', });
lyr_AustralianCapitalTerritory_2.set('fieldImages', {'fid': '', 'SAL_CODE21': '', 'SAL_NAME21': '', 'STE_CODE21': '', 'STE_NAME21': '', 'AUS_CODE21': '', 'AUS_NAME21': '', 'AREASQKM21': '', 'LOCI_URI21': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_NorthernTerritory_3.set('fieldImages', {'fid': '', 'SAL_CODE21': '', 'SAL_NAME21': '', 'STE_CODE21': '', 'STE_NAME21': '', 'AUS_CODE21': '', 'AUS_NAME21': '', 'AREASQKM21': '', 'LOCI_URI21': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Tasmania_4.set('fieldImages', {'fid': '', 'SAL_CODE21': '', 'SAL_NAME21': '', 'STE_CODE21': '', 'STE_NAME21': '', 'AUS_CODE21': '', 'AUS_NAME21': '', 'AREASQKM21': '', 'LOCI_URI21': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_SouthAustralia_5.set('fieldImages', {'fid': '', 'SAL_CODE21': '', 'SAL_NAME21': '', 'STE_CODE21': '', 'STE_NAME21': '', 'AUS_CODE21': '', 'AUS_NAME21': '', 'AREASQKM21': '', 'LOCI_URI21': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_NewSouthWales_6.set('fieldImages', {'fid': 'TextEdit', 'LGA_CODE24': 'TextEdit', 'LGA_NAME24': 'TextEdit', 'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM': 'TextEdit', 'LOCI_URI21': 'TextEdit', });
lyr_WesternAustralia_7.set('fieldImages', {'fid': 'TextEdit', 'SAL_CODE21': 'TextEdit', 'SAL_NAME21': 'TextEdit', 'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM21': 'TextEdit', 'LOCI_URI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Queensland_8.set('fieldImages', {'fid': '', 'SAL_CODE21': '', 'SAL_NAME21': '', 'STE_CODE21': '', 'STE_NAME21': '', 'AUS_CODE21': '', 'AUS_NAME21': '', 'AREASQKM21': '', 'LOCI_URI21': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Victoria_9.set('fieldImages', {'fid': '', 'SAL_CODE21': '', 'SAL_NAME21': '', 'STE_CODE21': '', 'STE_NAME21': '', 'AUS_CODE21': '', 'AUS_NAME21': '', 'AREASQKM21': '', 'LOCI_URI21': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_ScottParkGroup_10.set('fieldImages', {'fid': '', 'LOC_NAME': '', 'STATE': '', 'builder': '', 'market': '', });
lyr_Metricon_11.set('fieldImages', {'fid': 'TextEdit', 'LOC_NAME': 'TextEdit', 'Builder': 'TextEdit', 'Market Type': 'TextEdit', });
lyr_MetriconVictoria_12.set('fieldImages', {'fid': '', 'LOC_NAME': '', 'Builder': '', 'Market Type': '', });
lyr_Henley_13.set('fieldImages', {'LOC_NAME': 'TextEdit', 'STATE': 'TextEdit', 'LGA': 'TextEdit', 'Builder_2': 'TextEdit', 'Grange_Pro': 'TextEdit', 'Market_Typ': 'TextEdit', });
lyr_GrangeSites_14.set('fieldImages', {'fid': '', 'LC_PLY_PID': '', 'LOC_PID': '', 'DT_CREATE': '', 'LOC_NAME': '', 'LOC_CLASS': '', 'STATE': '', 'SA1_CODE21': '', 'CHG_FLAG21': '', 'CHG_LBL21': '', 'SA2_CODE21': '', 'SA2_NAME21': '', 'SA3_CODE21': '', 'SA3_NAME21': '', 'SA4_CODE21': '', 'SA4_NAME21': '', 'GCC_CODE21': '', 'GCC_NAME21': '', 'STE_CODE21': '', 'STE_NAME21': '', 'AUS_CODE21': '', 'AUS_NAME21': '', 'AREASQKM21': '', 'LOCI_URI21': '', 'OBJECTID': '', 'NAME': '', 'POSTCODE': '', 'Shape.area': '', 'Shape.len': '', 'layer': '', 'path': '', 'Locality': '', });
lyr_StateBoundary_1.set('fieldLabels', {'STE_CODE21': 'no label', 'STE_NAME21': 'no label', 'CHG_FLAG21': 'no label', 'CHG_LBL21': 'no label', 'AUS_CODE21': 'no label', 'AUS_NAME21': 'no label', 'AREASQKM21': 'no label', 'LOCI_URI21': 'no label', });
lyr_AustralianCapitalTerritory_2.set('fieldLabels', {'fid': 'no label', 'SAL_CODE21': 'no label', 'SAL_NAME21': 'no label', 'STE_CODE21': 'no label', 'STE_NAME21': 'no label', 'AUS_CODE21': 'no label', 'AUS_NAME21': 'no label', 'AREASQKM21': 'no label', 'LOCI_URI21': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_NorthernTerritory_3.set('fieldLabels', {'fid': 'no label', 'SAL_CODE21': 'no label', 'SAL_NAME21': 'no label', 'STE_CODE21': 'no label', 'STE_NAME21': 'no label', 'AUS_CODE21': 'no label', 'AUS_NAME21': 'no label', 'AREASQKM21': 'no label', 'LOCI_URI21': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Tasmania_4.set('fieldLabels', {'fid': 'no label', 'SAL_CODE21': 'no label', 'SAL_NAME21': 'no label', 'STE_CODE21': 'no label', 'STE_NAME21': 'no label', 'AUS_CODE21': 'no label', 'AUS_NAME21': 'no label', 'AREASQKM21': 'no label', 'LOCI_URI21': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SouthAustralia_5.set('fieldLabels', {'fid': 'no label', 'SAL_CODE21': 'no label', 'SAL_NAME21': 'no label', 'STE_CODE21': 'no label', 'STE_NAME21': 'no label', 'AUS_CODE21': 'no label', 'AUS_NAME21': 'no label', 'AREASQKM21': 'no label', 'LOCI_URI21': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_NewSouthWales_6.set('fieldLabels', {'fid': 'no label', 'LGA_CODE24': 'no label', 'LGA_NAME24': 'no label', 'STE_CODE21': 'no label', 'STE_NAME21': 'no label', 'AUS_CODE21': 'no label', 'AUS_NAME21': 'no label', 'AREASQKM': 'no label', 'LOCI_URI21': 'no label', });
lyr_WesternAustralia_7.set('fieldLabels', {'fid': 'no label', 'SAL_CODE21': 'no label', 'SAL_NAME21': 'no label', 'STE_CODE21': 'no label', 'STE_NAME21': 'no label', 'AUS_CODE21': 'no label', 'AUS_NAME21': 'no label', 'AREASQKM21': 'no label', 'LOCI_URI21': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Queensland_8.set('fieldLabels', {'fid': 'no label', 'SAL_CODE21': 'no label', 'SAL_NAME21': 'no label', 'STE_CODE21': 'no label', 'STE_NAME21': 'no label', 'AUS_CODE21': 'no label', 'AUS_NAME21': 'no label', 'AREASQKM21': 'no label', 'LOCI_URI21': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Victoria_9.set('fieldLabels', {'fid': 'no label', 'SAL_CODE21': 'no label', 'SAL_NAME21': 'no label', 'STE_CODE21': 'no label', 'STE_NAME21': 'no label', 'AUS_CODE21': 'no label', 'AUS_NAME21': 'no label', 'AREASQKM21': 'no label', 'LOCI_URI21': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_ScottParkGroup_10.set('fieldLabels', {'fid': 'hidden field', 'LOC_NAME': 'inline label - visible with data', 'STATE': 'inline label - visible with data', 'builder': 'inline label - visible with data', 'market': 'inline label - visible with data', });
lyr_Metricon_11.set('fieldLabels', {'fid': 'hidden field', 'LOC_NAME': 'inline label - visible with data', 'Builder': 'inline label - visible with data', 'Market Type': 'inline label - visible with data', });
lyr_MetriconVictoria_12.set('fieldLabels', {'fid': 'hidden field', 'LOC_NAME': 'inline label - visible with data', 'Builder': 'inline label - visible with data', 'Market Type': 'inline label - visible with data', });
lyr_Henley_13.set('fieldLabels', {'LOC_NAME': 'inline label - visible with data', 'STATE': 'inline label - visible with data', 'LGA': 'inline label - visible with data', 'Builder_2': 'inline label - visible with data', 'Grange_Pro': 'inline label - visible with data', 'Market_Typ': 'inline label - visible with data', });
lyr_GrangeSites_14.set('fieldLabels', {'fid': 'hidden field', 'LC_PLY_PID': 'hidden field', 'LOC_PID': 'hidden field', 'DT_CREATE': 'hidden field', 'LOC_NAME': 'hidden field', 'LOC_CLASS': 'hidden field', 'STATE': 'hidden field', 'SA1_CODE21': 'hidden field', 'CHG_FLAG21': 'hidden field', 'CHG_LBL21': 'hidden field', 'SA2_CODE21': 'hidden field', 'SA2_NAME21': 'hidden field', 'SA3_CODE21': 'hidden field', 'SA3_NAME21': 'hidden field', 'SA4_CODE21': 'hidden field', 'SA4_NAME21': 'hidden field', 'GCC_CODE21': 'hidden field', 'GCC_NAME21': 'hidden field', 'STE_CODE21': 'hidden field', 'STE_NAME21': 'hidden field', 'AUS_CODE21': 'hidden field', 'AUS_NAME21': 'hidden field', 'AREASQKM21': 'hidden field', 'LOCI_URI21': 'hidden field', 'OBJECTID': 'hidden field', 'NAME': 'hidden field', 'POSTCODE': 'hidden field', 'Shape.area': 'hidden field', 'Shape.len': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'Locality': 'inline label - visible with data', });
lyr_GrangeSites_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});