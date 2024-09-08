ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:7844").setExtent([151.052227, -28.128052, 153.876874, -26.662986]);
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

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_StateBoundary_2 = new ol.format.GeoJSON();
var features_StateBoundary_2 = format_StateBoundary_2.readFeatures(json_StateBoundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_StateBoundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StateBoundary_2.addFeatures(features_StateBoundary_2);
var lyr_StateBoundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StateBoundary_2, 
                style: style_StateBoundary_2,
                popuplayertitle: "State Boundary",
                interactive: false,
                title: '<img src="styles/legend/StateBoundary_2.png" /> State Boundary'
            });
var format_AustralianCapitalTerritory_3 = new ol.format.GeoJSON();
var features_AustralianCapitalTerritory_3 = format_AustralianCapitalTerritory_3.readFeatures(json_AustralianCapitalTerritory_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_AustralianCapitalTerritory_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AustralianCapitalTerritory_3.addFeatures(features_AustralianCapitalTerritory_3);
var lyr_AustralianCapitalTerritory_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AustralianCapitalTerritory_3, 
                style: style_AustralianCapitalTerritory_3,
                popuplayertitle: "Australian Capital Territory",
                interactive: true,
                title: '<img src="styles/legend/AustralianCapitalTerritory_3.png" /> Australian Capital Territory'
            });
var format_NorthernTerritory_4 = new ol.format.GeoJSON();
var features_NorthernTerritory_4 = format_NorthernTerritory_4.readFeatures(json_NorthernTerritory_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_NorthernTerritory_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NorthernTerritory_4.addFeatures(features_NorthernTerritory_4);
var lyr_NorthernTerritory_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NorthernTerritory_4, 
                style: style_NorthernTerritory_4,
                popuplayertitle: "Northern Territory",
                interactive: true,
                title: '<img src="styles/legend/NorthernTerritory_4.png" /> Northern Territory'
            });
var format_Tasmania_5 = new ol.format.GeoJSON();
var features_Tasmania_5 = format_Tasmania_5.readFeatures(json_Tasmania_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_Tasmania_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tasmania_5.addFeatures(features_Tasmania_5);
var lyr_Tasmania_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tasmania_5, 
                style: style_Tasmania_5,
                popuplayertitle: "Tasmania",
                interactive: true,
                title: '<img src="styles/legend/Tasmania_5.png" /> Tasmania'
            });
var format_SouthAustralia_6 = new ol.format.GeoJSON();
var features_SouthAustralia_6 = format_SouthAustralia_6.readFeatures(json_SouthAustralia_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_SouthAustralia_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SouthAustralia_6.addFeatures(features_SouthAustralia_6);
var lyr_SouthAustralia_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SouthAustralia_6, 
                style: style_SouthAustralia_6,
                popuplayertitle: "South Australia",
                interactive: true,
                title: '<img src="styles/legend/SouthAustralia_6.png" /> South Australia'
            });
var format_NewSouthWales_7 = new ol.format.GeoJSON();
var features_NewSouthWales_7 = format_NewSouthWales_7.readFeatures(json_NewSouthWales_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_NewSouthWales_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NewSouthWales_7.addFeatures(features_NewSouthWales_7);
var lyr_NewSouthWales_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NewSouthWales_7, 
                style: style_NewSouthWales_7,
                popuplayertitle: "New South Wales",
                interactive: true,
                title: '<img src="styles/legend/NewSouthWales_7.png" /> New South Wales'
            });
var format_WesternAustralia_8 = new ol.format.GeoJSON();
var features_WesternAustralia_8 = format_WesternAustralia_8.readFeatures(json_WesternAustralia_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_WesternAustralia_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WesternAustralia_8.addFeatures(features_WesternAustralia_8);
var lyr_WesternAustralia_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WesternAustralia_8, 
                style: style_WesternAustralia_8,
                popuplayertitle: "Western Australia",
                interactive: true,
                title: '<img src="styles/legend/WesternAustralia_8.png" /> Western Australia'
            });
var format_Queensland_9 = new ol.format.GeoJSON();
var features_Queensland_9 = format_Queensland_9.readFeatures(json_Queensland_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_Queensland_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Queensland_9.addFeatures(features_Queensland_9);
var lyr_Queensland_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Queensland_9, 
                style: style_Queensland_9,
                popuplayertitle: "Queensland",
                interactive: true,
                title: '<img src="styles/legend/Queensland_9.png" /> Queensland'
            });
var format_Victoria_10 = new ol.format.GeoJSON();
var features_Victoria_10 = format_Victoria_10.readFeatures(json_Victoria_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_Victoria_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Victoria_10.addFeatures(features_Victoria_10);
var lyr_Victoria_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Victoria_10, 
                style: style_Victoria_10,
                popuplayertitle: "Victoria",
                interactive: true,
                title: '<img src="styles/legend/Victoria_10.png" /> Victoria'
            });
var format_ScottParkGroup_11 = new ol.format.GeoJSON();
var features_ScottParkGroup_11 = format_ScottParkGroup_11.readFeatures(json_ScottParkGroup_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_ScottParkGroup_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ScottParkGroup_11.addFeatures(features_ScottParkGroup_11);
var lyr_ScottParkGroup_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ScottParkGroup_11, 
                style: style_ScottParkGroup_11,
                popuplayertitle: "Scott Park Group",
                interactive: true,
                title: '<img src="styles/legend/ScottParkGroup_11.png" /> Scott Park Group'
            });
var format_Metricon_12 = new ol.format.GeoJSON();
var features_Metricon_12 = format_Metricon_12.readFeatures(json_Metricon_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_Metricon_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Metricon_12.addFeatures(features_Metricon_12);
var lyr_Metricon_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Metricon_12, 
                style: style_Metricon_12,
                popuplayertitle: "Metricon",
                interactive: true,
                title: '<img src="styles/legend/Metricon_12.png" /> Metricon'
            });
var format_MetriconVictoria_13 = new ol.format.GeoJSON();
var features_MetriconVictoria_13 = format_MetriconVictoria_13.readFeatures(json_MetriconVictoria_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_MetriconVictoria_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MetriconVictoria_13.addFeatures(features_MetriconVictoria_13);
var lyr_MetriconVictoria_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MetriconVictoria_13, 
                style: style_MetriconVictoria_13,
                popuplayertitle: "Metricon (Victoria)",
                interactive: true,
                title: '<img src="styles/legend/MetriconVictoria_13.png" /> Metricon (Victoria)'
            });
var format_Henley_14 = new ol.format.GeoJSON();
var features_Henley_14 = format_Henley_14.readFeatures(json_Henley_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_Henley_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Henley_14.addFeatures(features_Henley_14);
var lyr_Henley_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Henley_14, 
                style: style_Henley_14,
                popuplayertitle: "Henley",
                interactive: true,
                title: '<img src="styles/legend/Henley_14.png" /> Henley'
            });
var format_GrangeSites_15 = new ol.format.GeoJSON();
var features_GrangeSites_15 = format_GrangeSites_15.readFeatures(json_GrangeSites_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_GrangeSites_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GrangeSites_15.addFeatures(features_GrangeSites_15);
var lyr_GrangeSites_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GrangeSites_15, 
                style: style_GrangeSites_15,
                popuplayertitle: "Grange Sites",
                interactive: true,
                title: '<img src="styles/legend/GrangeSites_15.png" /> Grange Sites'
            });
var group_GrangeSites = new ol.layer.Group({
                                layers: [lyr_GrangeSites_15,],
                                fold: "open",
                                title: "Grange Sites"});
var group_Builders = new ol.layer.Group({
                                layers: [lyr_ScottParkGroup_11,lyr_Metricon_12,lyr_MetriconVictoria_13,lyr_Henley_14,],
                                fold: "open",
                                title: "Builders"});
var group_BaseLayersBoundaries = new ol.layer.Group({
                                layers: [lyr_StateBoundary_2,lyr_AustralianCapitalTerritory_3,lyr_NorthernTerritory_4,lyr_Tasmania_5,lyr_SouthAustralia_6,lyr_NewSouthWales_7,lyr_WesternAustralia_8,lyr_Queensland_9,lyr_Victoria_10,],
                                fold: "open",
                                title: "Base Layers (Boundaries)"});

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_StateBoundary_2.setVisible(true);lyr_AustralianCapitalTerritory_3.setVisible(true);lyr_NorthernTerritory_4.setVisible(true);lyr_Tasmania_5.setVisible(true);lyr_SouthAustralia_6.setVisible(true);lyr_NewSouthWales_7.setVisible(true);lyr_WesternAustralia_8.setVisible(true);lyr_Queensland_9.setVisible(true);lyr_Victoria_10.setVisible(true);lyr_ScottParkGroup_11.setVisible(false);lyr_Metricon_12.setVisible(false);lyr_MetriconVictoria_13.setVisible(false);lyr_Henley_14.setVisible(false);lyr_GrangeSites_15.setVisible(false);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,lyr_GoogleMaps_1,group_BaseLayersBoundaries,group_Builders,group_GrangeSites];
lyr_StateBoundary_2.set('fieldAliases', {'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'CHG_FLAG21': 'CHG_FLAG21', 'CHG_LBL21': 'CHG_LBL21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM21': 'AREASQKM21', 'LOCI_URI21': 'LOCI_URI21', });
lyr_AustralianCapitalTerritory_3.set('fieldAliases', {'fid': 'fid', 'SAL_CODE21': 'SAL_CODE21', 'SAL_NAME21': 'SAL_NAME21', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM21': 'AREASQKM21', 'LOCI_URI21': 'LOCI_URI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_NorthernTerritory_4.set('fieldAliases', {'fid': 'fid', 'SAL_CODE21': 'SAL_CODE21', 'SAL_NAME21': 'SAL_NAME21', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM21': 'AREASQKM21', 'LOCI_URI21': 'LOCI_URI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Tasmania_5.set('fieldAliases', {'fid': 'fid', 'SAL_CODE21': 'SAL_CODE21', 'SAL_NAME21': 'SAL_NAME21', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM21': 'AREASQKM21', 'LOCI_URI21': 'LOCI_URI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SouthAustralia_6.set('fieldAliases', {'fid': 'fid', 'SAL_CODE21': 'SAL_CODE21', 'SAL_NAME21': 'SAL_NAME21', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM21': 'AREASQKM21', 'LOCI_URI21': 'LOCI_URI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_NewSouthWales_7.set('fieldAliases', {'fid': 'fid', 'LGA_CODE24': 'LGA_CODE24', 'LGA_NAME24': 'LGA_NAME24', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM': 'AREASQKM', 'LOCI_URI21': 'LOCI_URI21', });
lyr_WesternAustralia_8.set('fieldAliases', {'fid': 'fid', 'SAL_CODE21': 'SAL_CODE21', 'SAL_NAME21': 'SAL_NAME21', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM21': 'AREASQKM21', 'LOCI_URI21': 'LOCI_URI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Queensland_9.set('fieldAliases', {'fid': 'fid', 'SAL_CODE21': 'SAL_CODE21', 'SAL_NAME21': 'SAL_NAME21', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM21': 'AREASQKM21', 'LOCI_URI21': 'LOCI_URI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Victoria_10.set('fieldAliases', {'fid': 'fid', 'SAL_CODE21': 'SAL_CODE21', 'SAL_NAME21': 'SAL_NAME21', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM21': 'AREASQKM21', 'LOCI_URI21': 'LOCI_URI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ScottParkGroup_11.set('fieldAliases', {'fid': 'fid', 'LOC_NAME': 'LOC_NAME', 'STATE': 'STATE', 'builder': 'builder', 'market': 'market', });
lyr_Metricon_12.set('fieldAliases', {'fid': 'fid', 'LOC_NAME': 'LOC_NAME', 'Builder': 'Builder', 'Market Type': 'Market Type', });
lyr_MetriconVictoria_13.set('fieldAliases', {'fid': 'fid', 'LOC_NAME': 'LOC_NAME', 'Builder': 'Builder', 'Market Type': 'Market Type', });
lyr_Henley_14.set('fieldAliases', {'LOC_NAME': 'LOC_NAME', 'STATE': 'STATE', 'LGA': 'LGA', 'Builder_2': 'Builder_2', 'Grange_Pro': 'Grange_Pro', 'Market_Typ': 'Market_Typ', });
lyr_GrangeSites_15.set('fieldAliases', {'fid': 'fid', 'LC_PLY_PID': 'LC_PLY_PID', 'LOC_PID': 'LOC_PID', 'DT_CREATE': 'DT_CREATE', 'LOC_NAME': 'LOC_NAME', 'LOC_CLASS': 'LOC_CLASS', 'STATE': 'STATE', 'SA1_CODE21': 'SA1_CODE21', 'CHG_FLAG21': 'CHG_FLAG21', 'CHG_LBL21': 'CHG_LBL21', 'SA2_CODE21': 'SA2_CODE21', 'SA2_NAME21': 'SA2_NAME21', 'SA3_CODE21': 'SA3_CODE21', 'SA3_NAME21': 'SA3_NAME21', 'SA4_CODE21': 'SA4_CODE21', 'SA4_NAME21': 'SA4_NAME21', 'GCC_CODE21': 'GCC_CODE21', 'GCC_NAME21': 'GCC_NAME21', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM21': 'AREASQKM21', 'LOCI_URI21': 'LOCI_URI21', 'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'POSTCODE': 'POSTCODE', 'Shape.area': 'Shape.area', 'Shape.len': 'Shape.len', 'layer': 'layer', 'path': 'path', 'Locality': 'Locality', });
lyr_StateBoundary_2.set('fieldImages', {'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'CHG_FLAG21': 'TextEdit', 'CHG_LBL21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM21': 'TextEdit', 'LOCI_URI21': 'TextEdit', });
lyr_AustralianCapitalTerritory_3.set('fieldImages', {'fid': 'TextEdit', 'SAL_CODE21': 'TextEdit', 'SAL_NAME21': 'TextEdit', 'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM21': 'TextEdit', 'LOCI_URI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_NorthernTerritory_4.set('fieldImages', {'fid': 'TextEdit', 'SAL_CODE21': 'TextEdit', 'SAL_NAME21': 'TextEdit', 'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM21': 'TextEdit', 'LOCI_URI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Tasmania_5.set('fieldImages', {'fid': 'TextEdit', 'SAL_CODE21': 'TextEdit', 'SAL_NAME21': 'TextEdit', 'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM21': 'TextEdit', 'LOCI_URI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_SouthAustralia_6.set('fieldImages', {'fid': 'TextEdit', 'SAL_CODE21': 'TextEdit', 'SAL_NAME21': 'TextEdit', 'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM21': 'TextEdit', 'LOCI_URI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_NewSouthWales_7.set('fieldImages', {'fid': 'TextEdit', 'LGA_CODE24': 'TextEdit', 'LGA_NAME24': 'TextEdit', 'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM': 'TextEdit', 'LOCI_URI21': 'TextEdit', });
lyr_WesternAustralia_8.set('fieldImages', {'fid': 'TextEdit', 'SAL_CODE21': 'TextEdit', 'SAL_NAME21': 'TextEdit', 'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM21': 'TextEdit', 'LOCI_URI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Queensland_9.set('fieldImages', {'fid': 'TextEdit', 'SAL_CODE21': 'TextEdit', 'SAL_NAME21': 'TextEdit', 'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM21': 'TextEdit', 'LOCI_URI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Victoria_10.set('fieldImages', {'fid': 'TextEdit', 'SAL_CODE21': 'TextEdit', 'SAL_NAME21': 'TextEdit', 'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM21': 'TextEdit', 'LOCI_URI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ScottParkGroup_11.set('fieldImages', {'fid': 'TextEdit', 'LOC_NAME': 'TextEdit', 'STATE': 'TextEdit', 'builder': 'TextEdit', 'market': 'TextEdit', });
lyr_Metricon_12.set('fieldImages', {'fid': 'TextEdit', 'LOC_NAME': 'TextEdit', 'Builder': 'TextEdit', 'Market Type': 'TextEdit', });
lyr_MetriconVictoria_13.set('fieldImages', {'fid': 'TextEdit', 'LOC_NAME': 'TextEdit', 'Builder': 'TextEdit', 'Market Type': 'TextEdit', });
lyr_Henley_14.set('fieldImages', {'LOC_NAME': 'TextEdit', 'STATE': 'TextEdit', 'LGA': 'TextEdit', 'Builder_2': 'TextEdit', 'Grange_Pro': 'TextEdit', 'Market_Typ': 'TextEdit', });
lyr_GrangeSites_15.set('fieldImages', {'fid': 'TextEdit', 'LC_PLY_PID': 'TextEdit', 'LOC_PID': 'TextEdit', 'DT_CREATE': 'DateTime', 'LOC_NAME': 'TextEdit', 'LOC_CLASS': 'TextEdit', 'STATE': 'TextEdit', 'SA1_CODE21': 'TextEdit', 'CHG_FLAG21': 'TextEdit', 'CHG_LBL21': 'TextEdit', 'SA2_CODE21': 'TextEdit', 'SA2_NAME21': 'TextEdit', 'SA3_CODE21': 'TextEdit', 'SA3_NAME21': 'TextEdit', 'SA4_CODE21': 'TextEdit', 'SA4_NAME21': 'TextEdit', 'GCC_CODE21': 'TextEdit', 'GCC_NAME21': 'TextEdit', 'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM21': 'TextEdit', 'LOCI_URI21': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAME': 'TextEdit', 'POSTCODE': 'TextEdit', 'Shape.area': 'TextEdit', 'Shape.len': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Locality': 'TextEdit', });
lyr_StateBoundary_2.set('fieldLabels', {'STE_CODE21': 'no label', 'STE_NAME21': 'no label', 'CHG_FLAG21': 'no label', 'CHG_LBL21': 'no label', 'AUS_CODE21': 'no label', 'AUS_NAME21': 'no label', 'AREASQKM21': 'no label', 'LOCI_URI21': 'no label', });
lyr_AustralianCapitalTerritory_3.set('fieldLabels', {'fid': 'hidden field', 'SAL_CODE21': 'hidden field', 'SAL_NAME21': 'inline label - visible with data', 'STE_CODE21': 'hidden field', 'STE_NAME21': 'hidden field', 'AUS_CODE21': 'hidden field', 'AUS_NAME21': 'hidden field', 'AREASQKM21': 'hidden field', 'LOCI_URI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_NorthernTerritory_4.set('fieldLabels', {'fid': 'hidden field', 'SAL_CODE21': 'hidden field', 'SAL_NAME21': 'inline label - visible with data', 'STE_CODE21': 'hidden field', 'STE_NAME21': 'hidden field', 'AUS_CODE21': 'hidden field', 'AUS_NAME21': 'hidden field', 'AREASQKM21': 'hidden field', 'LOCI_URI21': 'hidden field', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Tasmania_5.set('fieldLabels', {'fid': 'hidden field', 'SAL_CODE21': 'hidden field', 'SAL_NAME21': 'inline label - visible with data', 'STE_CODE21': 'hidden field', 'STE_NAME21': 'hidden field', 'AUS_CODE21': 'hidden field', 'AUS_NAME21': 'hidden field', 'AREASQKM21': 'hidden field', 'LOCI_URI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_SouthAustralia_6.set('fieldLabels', {'fid': 'hidden field', 'SAL_CODE21': 'hidden field', 'SAL_NAME21': 'inline label - visible with data', 'STE_CODE21': 'hidden field', 'STE_NAME21': 'hidden field', 'AUS_CODE21': 'hidden field', 'AUS_NAME21': 'hidden field', 'AREASQKM21': 'hidden field', 'LOCI_URI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_NewSouthWales_7.set('fieldLabels', {'fid': 'hidden field', 'LGA_CODE24': 'hidden field', 'LGA_NAME24': 'inline label - visible with data', 'STE_CODE21': 'hidden field', 'STE_NAME21': 'hidden field', 'AUS_CODE21': 'hidden field', 'AUS_NAME21': 'hidden field', 'AREASQKM': 'hidden field', 'LOCI_URI21': 'hidden field', });
lyr_WesternAustralia_8.set('fieldLabels', {'fid': 'hidden field', 'SAL_CODE21': 'hidden field', 'SAL_NAME21': 'inline label - visible with data', 'STE_CODE21': 'hidden field', 'STE_NAME21': 'hidden field', 'AUS_CODE21': 'hidden field', 'AUS_NAME21': 'hidden field', 'AREASQKM21': 'hidden field', 'LOCI_URI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_Queensland_9.set('fieldLabels', {'fid': 'hidden field', 'SAL_CODE21': 'hidden field', 'SAL_NAME21': 'inline label - visible with data', 'STE_CODE21': 'hidden field', 'STE_NAME21': 'hidden field', 'AUS_CODE21': 'hidden field', 'AUS_NAME21': 'hidden field', 'AREASQKM21': 'hidden field', 'LOCI_URI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_Victoria_10.set('fieldLabels', {'fid': 'hidden field', 'SAL_CODE21': 'hidden field', 'SAL_NAME21': 'inline label - visible with data', 'STE_CODE21': 'hidden field', 'STE_NAME21': 'hidden field', 'AUS_CODE21': 'hidden field', 'AUS_NAME21': 'hidden field', 'AREASQKM21': 'hidden field', 'LOCI_URI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_ScottParkGroup_11.set('fieldLabels', {'fid': 'hidden field', 'LOC_NAME': 'inline label - visible with data', 'STATE': 'inline label - visible with data', 'builder': 'inline label - visible with data', 'market': 'hidden field', });
lyr_Metricon_12.set('fieldLabels', {'fid': 'hidden field', 'LOC_NAME': 'inline label - visible with data', 'Builder': 'inline label - visible with data', 'Market Type': 'hidden field', });
lyr_MetriconVictoria_13.set('fieldLabels', {'fid': 'hidden field', 'LOC_NAME': 'inline label - visible with data', 'Builder': 'inline label - visible with data', 'Market Type': 'hidden field', });
lyr_Henley_14.set('fieldLabels', {'LOC_NAME': 'inline label - visible with data', 'STATE': 'inline label - visible with data', 'LGA': 'inline label - visible with data', 'Builder_2': 'inline label - visible with data', 'Grange_Pro': 'hidden field', 'Market_Typ': 'hidden field', });
lyr_GrangeSites_15.set('fieldLabels', {'fid': 'hidden field', 'LC_PLY_PID': 'hidden field', 'LOC_PID': 'hidden field', 'DT_CREATE': 'hidden field', 'LOC_NAME': 'hidden field', 'LOC_CLASS': 'hidden field', 'STATE': 'hidden field', 'SA1_CODE21': 'hidden field', 'CHG_FLAG21': 'hidden field', 'CHG_LBL21': 'hidden field', 'SA2_CODE21': 'hidden field', 'SA2_NAME21': 'hidden field', 'SA3_CODE21': 'hidden field', 'SA3_NAME21': 'hidden field', 'SA4_CODE21': 'hidden field', 'SA4_NAME21': 'hidden field', 'GCC_CODE21': 'hidden field', 'GCC_NAME21': 'hidden field', 'STE_CODE21': 'hidden field', 'STE_NAME21': 'hidden field', 'AUS_CODE21': 'hidden field', 'AUS_NAME21': 'hidden field', 'AREASQKM21': 'hidden field', 'LOCI_URI21': 'hidden field', 'OBJECTID': 'hidden field', 'NAME': 'hidden field', 'POSTCODE': 'hidden field', 'Shape.area': 'hidden field', 'Shape.len': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'Locality': 'inline label - visible with data', });
lyr_GrangeSites_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});