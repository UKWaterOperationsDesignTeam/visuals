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
              wms_layers.push([lyr_m0330_0, 0]);var format_IslayMappoi_1 = new ol.format.GeoJSON();
var features_IslayMappoi_1 = format_IslayMappoi_1.readFeatures(json_IslayMappoi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IslayMappoi_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_IslayMappoi_1.addFeatures(features_IslayMappoi_1);cluster_IslayMappoi_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_IslayMappoi_1
});var lyr_IslayMappoi_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_IslayMappoi_1, 
                style: style_IslayMappoi_1,
                title: '<img src="styles/legend/IslayMappoi_1.png" /> IslayMap poi'
            });

lyr_m0330_0.setVisible(true);lyr_IslayMappoi_1.setVisible(true);
var layersList = [lyr_m0330_0,lyr_IslayMappoi_1];
lyr_IslayMappoi_1.set('fieldAliases', {'fid': 'fid', 'label': 'label', 'photo1': 'photo1', 'datetime': 'datetime', 'dropdown': 'dropdown', 'comments': 'comments', 'image': 'image', });
lyr_IslayMappoi_1.set('fieldImages', {'fid': 'Hidden', 'label': 'TextEdit', 'photo1': 'ExternalResource', 'datetime': 'DateTime', 'dropdown': 'ValueMap', 'comments': 'TextEdit', 'image': 'TextEdit', });
lyr_IslayMappoi_1.set('fieldLabels', {'label': 'no label', 'photo1': 'no label', 'datetime': 'no label', 'dropdown': 'no label', 'comments': 'no label', 'image': 'no label', });
lyr_IslayMappoi_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});