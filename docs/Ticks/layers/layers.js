var wms_layers = [];

        var lyr_background_0 = new ol.layer.Tile({
            'title': 'background',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=a871e5a95be0441aaaedae1718bd3087'
            })
        });var format_dmas_v13_1 = new ol.format.GeoJSON();
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
            });

lyr_background_0.setVisible(true);lyr_dmas_v13_1.setVisible(true);lyr_Adders_2.setVisible(true);lyr_Ticks_3.setVisible(true);
var layersList = [lyr_background_0,lyr_dmas_v13_1,lyr_Adders_2,lyr_Ticks_3];
lyr_dmas_v13_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'reference': 'reference', });
lyr_Adders_2.set('fieldAliases', {'fid': 'fid', 'Scientific name': 'Scientific name', 'Common name': 'Common name', 'Start date': 'Start date', 'Start date day': 'Start date day', 'Start date month': 'Start date month', 'Start date year': 'Start date year', 'Latitude (WGS84)': 'Latitude (WGS84)', 'Longitude (WGS84)': 'Longitude (WGS84)', 'Coordinate uncertainty (m)': 'Coordinate uncertainty (m)', });
lyr_Ticks_3.set('fieldAliases', {'fid': 'fid', 'Scientific name': 'Scientific name', 'Common name': 'Common name', 'Start date': 'Start date', 'Start date day': 'Start date day', 'Start date month': 'Start date month', 'Start date year': 'Start date year', 'Latitude (WGS84)': 'Latitude (WGS84)', 'Longitude (WGS84)': 'Longitude (WGS84)', 'Coordinate uncertainty (m)': 'Coordinate uncertainty (m)', });
lyr_dmas_v13_1.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'reference': 'TextEdit', });
lyr_Adders_2.set('fieldImages', {'fid': 'TextEdit', 'Scientific name': 'TextEdit', 'Common name': 'TextEdit', 'Start date': 'TextEdit', 'Start date day': 'Range', 'Start date month': 'Range', 'Start date year': 'Range', 'Latitude (WGS84)': 'TextEdit', 'Longitude (WGS84)': 'TextEdit', 'Coordinate uncertainty (m)': 'TextEdit', });
lyr_Ticks_3.set('fieldImages', {'fid': 'TextEdit', 'Scientific name': 'TextEdit', 'Common name': 'TextEdit', 'Start date': 'TextEdit', 'Start date day': 'Range', 'Start date month': 'Range', 'Start date year': 'Range', 'Latitude (WGS84)': 'TextEdit', 'Longitude (WGS84)': 'TextEdit', 'Coordinate uncertainty (m)': 'TextEdit', });
lyr_dmas_v13_1.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'reference': 'no label', });
lyr_Adders_2.set('fieldLabels', {'fid': 'no label', 'Scientific name': 'no label', 'Common name': 'no label', 'Start date': 'no label', 'Start date day': 'no label', 'Start date month': 'no label', 'Start date year': 'no label', 'Latitude (WGS84)': 'no label', 'Longitude (WGS84)': 'no label', 'Coordinate uncertainty (m)': 'no label', });
lyr_Ticks_3.set('fieldLabels', {'fid': 'no label', 'Scientific name': 'no label', 'Common name': 'no label', 'Start date': 'no label', 'Start date day': 'no label', 'Start date month': 'no label', 'Start date year': 'no label', 'Latitude (WGS84)': 'no label', 'Longitude (WGS84)': 'no label', 'Coordinate uncertainty (m)': 'no label', });
lyr_Ticks_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});