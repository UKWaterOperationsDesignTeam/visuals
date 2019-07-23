var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_RPSKirky_1 = new ol.format.GeoJSON();
var features_RPSKirky_1 = format_RPSKirky_1.readFeatures(json_RPSKirky_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RPSKirky_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_RPSKirky_1.addFeatures(features_RPSKirky_1);var lyr_RPSKirky_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RPSKirky_1, 
                style: style_RPSKirky_1,
                title: '<img src="styles/legend/RPSKirky_1.png" /> RPS Kirky'
            });var format_traveltime4hours_2 = new ol.format.GeoJSON();
var features_traveltime4hours_2 = format_traveltime4hours_2.readFeatures(json_traveltime4hours_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_traveltime4hours_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_traveltime4hours_2.addFeatures(features_traveltime4hours_2);var lyr_traveltime4hours_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_traveltime4hours_2, 
                style: style_traveltime4hours_2,
                title: '<img src="styles/legend/traveltime4hours_2.png" /> traveltime 4hours'
            });var format_traveltime3hours_3 = new ol.format.GeoJSON();
var features_traveltime3hours_3 = format_traveltime3hours_3.readFeatures(json_traveltime3hours_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_traveltime3hours_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_traveltime3hours_3.addFeatures(features_traveltime3hours_3);var lyr_traveltime3hours_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_traveltime3hours_3, 
                style: style_traveltime3hours_3,
                title: '<img src="styles/legend/traveltime3hours_3.png" /> traveltime 3hours'
            });var format_traveltime2hours_4 = new ol.format.GeoJSON();
var features_traveltime2hours_4 = format_traveltime2hours_4.readFeatures(json_traveltime2hours_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_traveltime2hours_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_traveltime2hours_4.addFeatures(features_traveltime2hours_4);var lyr_traveltime2hours_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_traveltime2hours_4, 
                style: style_traveltime2hours_4,
                title: '<img src="styles/legend/traveltime2hours_4.png" /> traveltime 2hours'
            });var format_traveltime1hours_5 = new ol.format.GeoJSON();
var features_traveltime1hours_5 = format_traveltime1hours_5.readFeatures(json_traveltime1hours_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_traveltime1hours_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_traveltime1hours_5.addFeatures(features_traveltime1hours_5);var lyr_traveltime1hours_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_traveltime1hours_5, 
                style: style_traveltime1hours_5,
                title: '<img src="styles/legend/traveltime1hours_5.png" /> traveltime 1hours'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_RPSKirky_1.setVisible(true);lyr_traveltime4hours_2.setVisible(true);lyr_traveltime3hours_3.setVisible(true);lyr_traveltime2hours_4.setVisible(true);lyr_traveltime1hours_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_RPSKirky_1,lyr_traveltime4hours_2,lyr_traveltime3hours_3,lyr_traveltime2hours_4,lyr_traveltime1hours_5];
lyr_RPSKirky_1.set('fieldAliases', {});
lyr_traveltime4hours_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'properties': 'properties', });
lyr_traveltime3hours_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'properties': 'properties', });
lyr_traveltime2hours_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'properties': 'properties', });
lyr_traveltime1hours_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'properties': 'properties', });
lyr_RPSKirky_1.set('fieldImages', {});
lyr_traveltime4hours_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'properties': 'TextEdit', });
lyr_traveltime3hours_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'properties': 'TextEdit', });
lyr_traveltime2hours_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'properties': 'TextEdit', });
lyr_traveltime1hours_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'properties': 'TextEdit', });
lyr_RPSKirky_1.set('fieldLabels', {});
lyr_traveltime4hours_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'properties': 'no label', });
lyr_traveltime3hours_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'properties': 'no label', });
lyr_traveltime2hours_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'properties': 'no label', });
lyr_traveltime1hours_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'properties': 'no label', });
lyr_traveltime1hours_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});