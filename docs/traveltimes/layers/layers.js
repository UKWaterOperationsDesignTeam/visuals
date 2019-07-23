var wms_layers = [];
var format_dma_0 = new ol.format.GeoJSON();
var features_dma_0 = format_dma_0.readFeatures(json_dma_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dma_0 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_dma_0.addFeatures(features_dma_0);var lyr_dma_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_dma_0, 
                style: style_dma_0,
                title: '<img src="styles/legend/dma_0.png" /> dma'
            });var lyr_background_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://map.publicsectormapping.gov.scot/osmao-scotw-ate01-f5145/service?REQUEST%3DGetCapabilities",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "m0330",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "background",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_background_1, 0]);var lyr_4hours_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "4 hours",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/4hours_2.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-694136.024426, 6960739.711598, -70066.602576, 7943554.307998]
                            })
                        });var lyr_3hours_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "3 hours",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/3hours_3.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-656249.548930, 7122216.567502, -165323.915362, 7839509.024676]
                            })
                        });var lyr_2hours_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "2 hours",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/2hours_4.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-591419.303881, 7293097.317963, -247250.607806, 7720569.694150]
                            })
                        });var lyr_1hour_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "1 hour",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/1hour_5.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-542497.727262, 7445379.231641, -364506.767043, 7628167.547351]
                            })
                        });var format_RPSKirky_6 = new ol.format.GeoJSON();
var features_RPSKirky_6 = format_RPSKirky_6.readFeatures(json_RPSKirky_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RPSKirky_6 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_RPSKirky_6.addFeatures(features_RPSKirky_6);var lyr_RPSKirky_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RPSKirky_6, 
                style: style_RPSKirky_6,
                title: '<img src="styles/legend/RPSKirky_6.png" /> RPS Kirky'
            });

lyr_dma_0.setVisible(true);lyr_background_1.setVisible(true);lyr_4hours_2.setVisible(true);lyr_3hours_3.setVisible(true);lyr_2hours_4.setVisible(true);lyr_1hour_5.setVisible(true);lyr_RPSKirky_6.setVisible(true);
var layersList = [lyr_dma_0,lyr_background_1,lyr_4hours_2,lyr_3hours_3,lyr_2hours_4,lyr_1hour_5,lyr_RPSKirky_6];
lyr_dma_0.set('fieldAliases', {'_uid_': '_uid_', 'objectid': 'objectid', 'name': 'name', });
lyr_RPSKirky_6.set('fieldAliases', {});
lyr_dma_0.set('fieldImages', {'_uid_': 'TextEdit', 'objectid': 'Range', 'name': 'TextEdit', });
lyr_RPSKirky_6.set('fieldImages', {});
lyr_dma_0.set('fieldLabels', {'_uid_': 'no label', 'objectid': 'no label', 'name': 'no label', });
lyr_RPSKirky_6.set('fieldLabels', {});
lyr_RPSKirky_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});