ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:7844").setExtent([109.994984, -44.108683, 154.742967, -12.901829]);
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
var format_Suburb_1 = new ol.format.GeoJSON();
var features_Suburb_1 = format_Suburb_1.readFeatures(json_Suburb_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_Suburb_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suburb_1.addFeatures(features_Suburb_1);
var lyr_Suburb_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suburb_1, 
                style: style_Suburb_1,
                popuplayertitle: "Suburb",
                interactive: false,
                title: '<img src="styles/legend/Suburb_1.png" /> Suburb'
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
var format_Henley_3 = new ol.format.GeoJSON();
var features_Henley_3 = format_Henley_3.readFeatures(json_Henley_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_Henley_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Henley_3.addFeatures(features_Henley_3);
var lyr_Henley_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Henley_3, 
                style: style_Henley_3,
                popuplayertitle: "Henley",
                interactive: true,
                title: '<img src="styles/legend/Henley_3.png" /> Henley'
            });
var format_Metricon_4 = new ol.format.GeoJSON();
var features_Metricon_4 = format_Metricon_4.readFeatures(json_Metricon_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_Metricon_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Metricon_4.addFeatures(features_Metricon_4);
var lyr_Metricon_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Metricon_4, 
                style: style_Metricon_4,
                popuplayertitle: "Metricon",
                interactive: true,
                title: '<img src="styles/legend/Metricon_4.png" /> Metricon'
            });
var format_ScotParkGroup_5 = new ol.format.GeoJSON();
var features_ScotParkGroup_5 = format_ScotParkGroup_5.readFeatures(json_ScotParkGroup_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_ScotParkGroup_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ScotParkGroup_5.addFeatures(features_ScotParkGroup_5);
var lyr_ScotParkGroup_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ScotParkGroup_5, 
                style: style_ScotParkGroup_5,
                popuplayertitle: "Scot Park Group",
                interactive: true,
                title: '<img src="styles/legend/ScotParkGroup_5.png" /> Scot Park Group'
            });
var format_GrangeSitessuburb_6 = new ol.format.GeoJSON();
var features_GrangeSitessuburb_6 = format_GrangeSitessuburb_6.readFeatures(json_GrangeSitessuburb_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7844'});
var jsonSource_GrangeSitessuburb_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GrangeSitessuburb_6.addFeatures(features_GrangeSitessuburb_6);
var lyr_GrangeSitessuburb_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GrangeSitessuburb_6, 
                style: style_GrangeSitessuburb_6,
                popuplayertitle: "Grange Sites (suburb)",
                interactive: false,
                title: '<img src="styles/legend/GrangeSitessuburb_6.png" /> Grange Sites (suburb)'
            });
var group_GrangeSites = new ol.layer.Group({
                                layers: [lyr_GrangeSitessuburb_6,],
                                fold: "open",
                                title: "Grange Sites"});
var group_Builders = new ol.layer.Group({
                                layers: [lyr_Henley_3,lyr_Metricon_4,lyr_ScotParkGroup_5,],
                                fold: "open",
                                title: "Builders"});
var group_BaseLayers = new ol.layer.Group({
                                layers: [lyr_ESRISatelliteArcGISWorld_Imagery_0,lyr_Suburb_1,lyr_StateBoundary_2,],
                                fold: "open",
                                title: "Base Layers"});

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_Suburb_1.setVisible(true);lyr_StateBoundary_2.setVisible(true);lyr_Henley_3.setVisible(false);lyr_Metricon_4.setVisible(true);lyr_ScotParkGroup_5.setVisible(false);lyr_GrangeSitessuburb_6.setVisible(false);
var layersList = [group_BaseLayers,group_Builders,group_GrangeSites];
lyr_Suburb_1.set('fieldAliases', {'fid': 'fid', 'SAL_NAME21': 'SAL_NAME21', });
lyr_StateBoundary_2.set('fieldAliases', {'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'CHG_FLAG21': 'CHG_FLAG21', 'CHG_LBL21': 'CHG_LBL21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM21': 'AREASQKM21', 'LOCI_URI21': 'LOCI_URI21', });
lyr_Henley_3.set('fieldAliases', {'LOC_NAME': 'LOC_NAME', 'STATE': 'STATE', 'LGA': 'LGA', 'Builder_2': 'Builder_2', 'Grange_Pro': 'Grange_Pro', 'Market_Typ': 'Market_Typ', });
lyr_Metricon_4.set('fieldAliases', {'fid': 'fid', 'LOC_NAME': 'LOC_NAME', 'STATE': 'STATE', 'Builder': 'Builder', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ScotParkGroup_5.set('fieldAliases', {'LOC_NAME': 'LOC_NAME', 'STATE': 'STATE', 'builder': 'builder', 'product': 'product', 'market': 'market', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_GrangeSitessuburb_6.set('fieldAliases', {'LC_PLY_PID': 'LC_PLY_PID', 'LOC_PID': 'LOC_PID', 'DT_CREATE': 'DT_CREATE', 'LOC_NAME': 'LOC_NAME', 'LOC_CLASS': 'LOC_CLASS', 'STATE': 'STATE', 'SA1_CODE21': 'SA1_CODE21', 'CHG_FLAG21': 'CHG_FLAG21', 'CHG_LBL21': 'CHG_LBL21', 'SA2_CODE21': 'SA2_CODE21', 'SA2_NAME21': 'SA2_NAME21', 'SA3_CODE21': 'SA3_CODE21', 'SA3_NAME21': 'SA3_NAME21', 'SA4_CODE21': 'SA4_CODE21', 'SA4_NAME21': 'SA4_NAME21', 'GCC_CODE21': 'GCC_CODE21', 'GCC_NAME21': 'GCC_NAME21', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM21': 'AREASQKM21', 'LOCI_URI21': 'LOCI_URI21', 'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'POSTCODE': 'POSTCODE', 'Shape.area': 'Shape.area', 'Shape.len': 'Shape.len', 'layer': 'layer', 'path': 'path', });
lyr_Suburb_1.set('fieldImages', {'fid': 'TextEdit', 'SAL_NAME21': 'TextEdit', });
lyr_StateBoundary_2.set('fieldImages', {'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'CHG_FLAG21': 'TextEdit', 'CHG_LBL21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM21': 'TextEdit', 'LOCI_URI21': 'TextEdit', });
lyr_Henley_3.set('fieldImages', {'LOC_NAME': 'TextEdit', 'STATE': 'TextEdit', 'LGA': 'TextEdit', 'Builder_2': 'TextEdit', 'Grange_Pro': 'TextEdit', 'Market_Typ': 'TextEdit', });
lyr_Metricon_4.set('fieldImages', {'fid': '', 'LOC_NAME': '', 'STATE': '', 'Builder': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_ScotParkGroup_5.set('fieldImages', {'LOC_NAME': 'TextEdit', 'STATE': 'TextEdit', 'builder': 'TextEdit', 'product': 'TextEdit', 'market': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_GrangeSitessuburb_6.set('fieldImages', {'LC_PLY_PID': 'TextEdit', 'LOC_PID': 'TextEdit', 'DT_CREATE': 'DateTime', 'LOC_NAME': 'TextEdit', 'LOC_CLASS': 'TextEdit', 'STATE': 'TextEdit', 'SA1_CODE21': 'TextEdit', 'CHG_FLAG21': 'TextEdit', 'CHG_LBL21': 'TextEdit', 'SA2_CODE21': 'TextEdit', 'SA2_NAME21': 'TextEdit', 'SA3_CODE21': 'TextEdit', 'SA3_NAME21': 'TextEdit', 'SA4_CODE21': 'TextEdit', 'SA4_NAME21': 'TextEdit', 'GCC_CODE21': 'TextEdit', 'GCC_NAME21': 'TextEdit', 'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM21': 'TextEdit', 'LOCI_URI21': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAME': 'TextEdit', 'POSTCODE': 'TextEdit', 'Shape.area': 'TextEdit', 'Shape.len': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Suburb_1.set('fieldLabels', {'fid': 'no label', 'SAL_NAME21': 'no label', });
lyr_StateBoundary_2.set('fieldLabels', {'STE_CODE21': 'no label', 'STE_NAME21': 'no label', 'CHG_FLAG21': 'no label', 'CHG_LBL21': 'no label', 'AUS_CODE21': 'no label', 'AUS_NAME21': 'no label', 'AREASQKM21': 'no label', 'LOCI_URI21': 'no label', });
lyr_Henley_3.set('fieldLabels', {'LOC_NAME': 'inline label - visible with data', 'STATE': 'inline label - visible with data', 'LGA': 'inline label - visible with data', 'Builder_2': 'inline label - visible with data', 'Grange_Pro': 'header label - visible with data', 'Market_Typ': 'header label - visible with data', });
lyr_Metricon_4.set('fieldLabels', {'fid': 'hidden field', 'LOC_NAME': 'inline label - visible with data', 'STATE': 'inline label - visible with data', 'Builder': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', });
lyr_ScotParkGroup_5.set('fieldLabels', {'LOC_NAME': 'inline label - visible with data', 'STATE': 'inline label - visible with data', 'builder': 'inline label - visible with data', 'product': 'inline label - visible with data', 'market': 'inline label - visible with data', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_GrangeSitessuburb_6.set('fieldLabels', {'LC_PLY_PID': 'no label', 'LOC_PID': 'no label', 'DT_CREATE': 'no label', 'LOC_NAME': 'no label', 'LOC_CLASS': 'no label', 'STATE': 'no label', 'SA1_CODE21': 'no label', 'CHG_FLAG21': 'no label', 'CHG_LBL21': 'no label', 'SA2_CODE21': 'no label', 'SA2_NAME21': 'no label', 'SA3_CODE21': 'no label', 'SA3_NAME21': 'no label', 'SA4_CODE21': 'no label', 'SA4_NAME21': 'no label', 'GCC_CODE21': 'no label', 'GCC_NAME21': 'no label', 'STE_CODE21': 'no label', 'STE_NAME21': 'no label', 'AUS_CODE21': 'no label', 'AUS_NAME21': 'no label', 'AREASQKM21': 'no label', 'LOCI_URI21': 'no label', 'OBJECTID': 'no label', 'NAME': 'no label', 'POSTCODE': 'no label', 'Shape.area': 'no label', 'Shape.len': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_GrangeSitessuburb_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});