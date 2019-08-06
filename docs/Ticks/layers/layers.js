var wms_layers = [];
var lyr_m0330_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://map.publicsectormapping.gov.scot/osmao-scotw-ate01-f5145/service?REQUEST%3DGetCapabilities",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "viaEuropa_m0330",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "m0330",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_m0330_0, 0]);var format_dmas_v13_1 = new ol.format.GeoJSON();
var features_dmas_v13_1 = format_dmas_v13_1.readFeatures(json_dmas_v13_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dmas_v13_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_dmas_v13_1.addFeatures(features_dmas_v13_1);var lyr_dmas_v13_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_dmas_v13_1, 
                style: style_dmas_v13_1,
                title: '<img src="styles/legend/dmas_v13_1.png" /> dmas_v13'
            });var format_Adders_2 = new ol.format.GeoJSON();
var features_Adders_2 = format_Adders_2.readFeatures(json_Adders_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Adders_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Adders_2.addFeatures(features_Adders_2);var lyr_Adders_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Adders_2, 
                style: style_Adders_2,
                title: '<img src="styles/legend/Adders_2.png" /> Adders'
            });var format_Ticks_3 = new ol.format.GeoJSON();
var features_Ticks_3 = format_Ticks_3.readFeatures(json_Ticks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ticks_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Ticks_3.addFeatures(features_Ticks_3);var lyr_Ticks_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ticks_3, 
                style: style_Ticks_3,
                title: '<img src="styles/legend/Ticks_3.png" /> Ticks'
            });var format_Violenceregister_4 = new ol.format.GeoJSON();
var features_Violenceregister_4 = format_Violenceregister_4.readFeatures(json_Violenceregister_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Violenceregister_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Violenceregister_4.addFeatures(features_Violenceregister_4);cluster_Violenceregister_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Violenceregister_4
});var lyr_Violenceregister_4 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Violenceregister_4, 
                style: style_Violenceregister_4,
                title: '<img src="styles/legend/Violenceregister_4.png" /> Violence register'
            });

lyr_m0330_0.setVisible(true);lyr_dmas_v13_1.setVisible(true);lyr_Adders_2.setVisible(true);lyr_Ticks_3.setVisible(true);lyr_Violenceregister_4.setVisible(true);
var layersList = [lyr_m0330_0,lyr_dmas_v13_1,lyr_Adders_2,lyr_Ticks_3,lyr_Violenceregister_4];
lyr_dmas_v13_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'reference': 'reference', });
lyr_Adders_2.set('fieldAliases', {'fid': 'fid', 'Scientific name': 'Scientific name', 'Common name': 'Common name', 'Start date': 'Start date', 'Start date day': 'Start date day', 'Start date month': 'Start date month', 'Start date year': 'Start date year', 'Latitude (WGS84)': 'Latitude (WGS84)', 'Longitude (WGS84)': 'Longitude (WGS84)', 'Coordinate uncertainty (m)': 'Coordinate uncertainty (m)', });
lyr_Ticks_3.set('fieldAliases', {'fid': 'fid', 'Scientific name': 'Scientific name', 'Common name': 'Common name', 'Start date': 'Start date', 'Start date day': 'Start date day', 'Start date month': 'Start date month', 'Start date year': 'Start date year', 'Latitude (WGS84)': 'Latitude (WGS84)', 'Longitude (WGS84)': 'Longitude (WGS84)', 'Coordinate uncertainty (m)': 'Coordinate uncertainty (m)', });
lyr_Violenceregister_4.set('fieldAliases', {'fid': 'fid', 'Area ref': 'Area ref', 'Area': 'Area', 'Date': 'Date', 'Address': 'Address', 'lat': 'lat', 'long': 'long', 'radius': 'radius', 'Risk of 3rd party alcohol - Drugs Influence': 'Risk of 3rd party alcohol - Drugs Influence', 'Perceived Trespass': 'Perceived Trespass', 'Animal': 'Animal', 'Crowd': 'Crowd', 'Resident complaint': 'Resident complaint', 'Historical violence': 'Historical violence', 'Other': 'Other', 'Time Bound': 'Time Bound', 'Controls': 'Controls', });
lyr_dmas_v13_1.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'reference': 'TextEdit', });
lyr_Adders_2.set('fieldImages', {'fid': 'TextEdit', 'Scientific name': 'TextEdit', 'Common name': 'TextEdit', 'Start date': 'TextEdit', 'Start date day': 'Range', 'Start date month': 'Range', 'Start date year': 'Range', 'Latitude (WGS84)': 'TextEdit', 'Longitude (WGS84)': 'TextEdit', 'Coordinate uncertainty (m)': 'TextEdit', });
lyr_Ticks_3.set('fieldImages', {'fid': 'TextEdit', 'Scientific name': 'TextEdit', 'Common name': 'TextEdit', 'Start date': 'TextEdit', 'Start date day': 'Range', 'Start date month': 'Range', 'Start date year': 'Range', 'Latitude (WGS84)': 'TextEdit', 'Longitude (WGS84)': 'TextEdit', 'Coordinate uncertainty (m)': 'TextEdit', });
lyr_Violenceregister_4.set('fieldImages', {'fid': 'TextEdit', 'Area ref': 'Range', 'Area': 'TextEdit', 'Date': 'TextEdit', 'Address': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'radius': 'TextEdit', 'Risk of 3rd party alcohol - Drugs Influence': 'TextEdit', 'Perceived Trespass': 'TextEdit', 'Animal': 'TextEdit', 'Crowd': 'TextEdit', 'Resident complaint': 'TextEdit', 'Historical violence': 'TextEdit', 'Other': 'TextEdit', 'Time Bound': 'TextEdit', 'Controls': 'TextEdit', });
lyr_dmas_v13_1.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'reference': 'no label', });
lyr_Adders_2.set('fieldLabels', {'fid': 'no label', 'Scientific name': 'no label', 'Common name': 'no label', 'Start date': 'no label', 'Start date day': 'no label', 'Start date month': 'no label', 'Start date year': 'no label', 'Latitude (WGS84)': 'no label', 'Longitude (WGS84)': 'no label', 'Coordinate uncertainty (m)': 'no label', });
lyr_Ticks_3.set('fieldLabels', {'fid': 'no label', 'Scientific name': 'no label', 'Common name': 'no label', 'Start date': 'no label', 'Start date day': 'no label', 'Start date month': 'no label', 'Start date year': 'no label', 'Latitude (WGS84)': 'no label', 'Longitude (WGS84)': 'no label', 'Coordinate uncertainty (m)': 'no label', });
lyr_Violenceregister_4.set('fieldLabels', {'fid': 'no label', 'Area ref': 'header label', 'Area': 'header label', 'Date': 'header label', 'Address': 'header label', 'lat': 'header label', 'long': 'header label', 'radius': 'header label', 'Risk of 3rd party alcohol - Drugs Influence': 'header label', 'Perceived Trespass': 'header label', 'Animal': 'header label', 'Crowd': 'header label', 'Resident complaint': 'header label', 'Historical violence': 'header label', 'Other': 'header label', 'Time Bound': 'header label', 'Controls': 'header label', });
lyr_Violenceregister_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});