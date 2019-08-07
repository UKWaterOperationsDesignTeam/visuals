var wms_layers = [];
var lyr_Background_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://map.publicsectormapping.gov.scot/osmao-scotw-ate01-f5145/service?REQUEST%3DGetCapabilities",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "viaEuropa_m0335",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Background",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Background_0, 0]);var format_dmas_v13_1 = new ol.format.GeoJSON();
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
            });var lyr_Adder_and_Tick_coverage_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Adder_and_Tick_coverage",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Adder_and_Tick_coverage_2.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-882783.555011, 7139729.057429, 120572.766441, 8282249.734691]
                            })
                        });var format_Tick_locations_3 = new ol.format.GeoJSON();
var features_Tick_locations_3 = format_Tick_locations_3.readFeatures(json_Tick_locations_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tick_locations_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Tick_locations_3.addFeatures(features_Tick_locations_3);var lyr_Tick_locations_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tick_locations_3, 
                style: style_Tick_locations_3,
                title: '<img src="styles/legend/Tick_locations_3.png" /> Tick_locations'
            });var format_Adder_locations_4 = new ol.format.GeoJSON();
var features_Adder_locations_4 = format_Adder_locations_4.readFeatures(json_Adder_locations_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Adder_locations_4 = new ol.source.Vector({
    attributions: '<a href="TickCitation.html"><b>Tick Data</b> - NBN Atlas occurrence download at https://nbnatlas.org accessed on Wed Aug 07 09:21:13 UTC 2019      </a>',
});
jsonSource_Adder_locations_4.addFeatures(features_Adder_locations_4);var lyr_Adder_locations_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Adder_locations_4, 
                style: style_Adder_locations_4,
                title: '<img src="styles/legend/Adder_locations_4.png" /> Adder_locations'
            });var format_ViolenceRegister_5 = new ol.format.GeoJSON();
var features_ViolenceRegister_5 = format_ViolenceRegister_5.readFeatures(json_ViolenceRegister_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViolenceRegister_5 = new ol.source.Vector({
    attributions: '<a href="AdderCitation.html"><b>Adder Data</b> - NBN Atlas occurrence download at https://nbnatlas.org accessed on Wed Aug 07 09:24:20 UTC 2019</a>',
});
jsonSource_ViolenceRegister_5.addFeatures(features_ViolenceRegister_5);var lyr_ViolenceRegister_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViolenceRegister_5, 
                style: style_ViolenceRegister_5,
                title: '<img src="styles/legend/ViolenceRegister_5.png" /> Violence Register'
            });

lyr_Background_0.setVisible(true);lyr_dmas_v13_1.setVisible(true);lyr_Adder_and_Tick_coverage_2.setVisible(true);lyr_Tick_locations_3.setVisible(true);lyr_Adder_locations_4.setVisible(true);lyr_ViolenceRegister_5.setVisible(true);
var layersList = [lyr_Background_0,lyr_dmas_v13_1,lyr_Adder_and_Tick_coverage_2,lyr_Tick_locations_3,lyr_Adder_locations_4,lyr_ViolenceRegister_5];
lyr_dmas_v13_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'reference': 'reference', });
lyr_Tick_locations_3.set('fieldAliases', {'fid': 'fid', 'Common name': 'Common name', 'Occurrence status': 'Occurrence status', });
lyr_Adder_locations_4.set('fieldAliases', {'fid': 'fid', 'Common name': 'Common name', 'Occurrence status': 'Occurrence status', });
lyr_ViolenceRegister_5.set('fieldAliases', {'Area ref': 'Area ref', 'Area': 'Area', 'Date': 'Date', 'Address': 'Address', 'lat': 'lat', 'long': 'long', 'radius': 'radius', 'Risk of 3rd party alcohol - Drugs Influence': 'Risk of 3rd party alcohol - Drugs Influence', 'Perceived Trespass': 'Perceived Trespass', 'Animal': 'Animal', 'Crowd': 'Crowd', 'Resident complaint': 'Resident complaint', 'Historical violence': 'Historical violence', 'Other': 'Other', 'Time Bound': 'Time Bound', 'Controls': 'Controls', });
lyr_dmas_v13_1.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'reference': 'TextEdit', });
lyr_Tick_locations_3.set('fieldImages', {'fid': 'TextEdit', 'Common name': 'TextEdit', 'Occurrence status': 'TextEdit', });
lyr_Adder_locations_4.set('fieldImages', {'fid': 'TextEdit', 'Common name': 'TextEdit', 'Occurrence status': 'TextEdit', });
lyr_ViolenceRegister_5.set('fieldImages', {'Area ref': 'Range', 'Area': 'TextEdit', 'Date': 'TextEdit', 'Address': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'radius': 'TextEdit', 'Risk of 3rd party alcohol - Drugs Influence': 'TextEdit', 'Perceived Trespass': 'TextEdit', 'Animal': 'TextEdit', 'Crowd': 'TextEdit', 'Resident complaint': 'TextEdit', 'Historical violence': 'TextEdit', 'Other': 'TextEdit', 'Time Bound': 'TextEdit', 'Controls': 'TextEdit', });
lyr_dmas_v13_1.set('fieldLabels', {'fid': 'header label', 'name': 'header label', 'reference': 'header label', });
lyr_Tick_locations_3.set('fieldLabels', {'fid': 'header label', 'Common name': 'header label', 'Occurrence status': 'header label', });
lyr_Adder_locations_4.set('fieldLabels', {'fid': 'header label', 'Common name': 'header label', 'Occurrence status': 'header label', });
lyr_ViolenceRegister_5.set('fieldLabels', {'Area ref': 'header label', 'Area': 'header label', 'Date': 'header label', 'Address': 'header label', 'lat': 'header label', 'long': 'header label', 'radius': 'header label', 'Risk of 3rd party alcohol - Drugs Influence': 'header label', 'Perceived Trespass': 'header label', 'Animal': 'header label', 'Crowd': 'header label', 'Resident complaint': 'header label', 'Historical violence': 'header label', 'Other': 'header label', 'Time Bound': 'header label', 'Controls': 'header label', });
lyr_ViolenceRegister_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});