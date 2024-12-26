var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TOPONIMI_PT_50K_1 = new ol.format.GeoJSON();
var features_TOPONIMI_PT_50K_1 = format_TOPONIMI_PT_50K_1.readFeatures(json_TOPONIMI_PT_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOPONIMI_PT_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOPONIMI_PT_50K_1.addFeatures(features_TOPONIMI_PT_50K_1);
var lyr_TOPONIMI_PT_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TOPONIMI_PT_50K_1, 
                style: style_TOPONIMI_PT_50K_1,
                popuplayertitle: 'TOPONIMI_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/TOPONIMI_PT_50K_1.png" /> TOPONIMI_PT_50K'
            });
var format_SPOTHEIGHT_PT_50K_2 = new ol.format.GeoJSON();
var features_SPOTHEIGHT_PT_50K_2 = format_SPOTHEIGHT_PT_50K_2.readFeatures(json_SPOTHEIGHT_PT_50K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPOTHEIGHT_PT_50K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPOTHEIGHT_PT_50K_2.addFeatures(features_SPOTHEIGHT_PT_50K_2);
var lyr_SPOTHEIGHT_PT_50K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPOTHEIGHT_PT_50K_2, 
                style: style_SPOTHEIGHT_PT_50K_2,
                popuplayertitle: 'SPOTHEIGHT_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/SPOTHEIGHT_PT_50K_2.png" /> SPOTHEIGHT_PT_50K'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_TOPONIMI_PT_50K_1.setVisible(true);lyr_SPOTHEIGHT_PT_50K_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_TOPONIMI_PT_50K_1,lyr_SPOTHEIGHT_PT_50K_2];
lyr_TOPONIMI_PT_50K_1.set('fieldAliases', {'FCODE': 'FCODE', 'NAMOBJ': 'NAMOBJ', 'ALIAS': 'ALIAS', 'LOKTPN': 'LOKTPN', 'REMARK': 'REMARK', 'KLSTPN': 'KLSTPN', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FTYPE': 'FTYPE', 'LAT': 'LAT', 'LON': 'LON', 'KOORDY': 'KOORDY', 'KOORDX': 'KOORDX', 'KOORDINAT1': 'KOORDINAT1', 'KORDINTAT2': 'KORDINTAT2', 'LUAS': 'LUAS', 'Elevasi': 'Elevasi', 'NAMLOK': 'NAMLOK', 'NAMSPE': 'NAMSPE', 'NAMMAP': 'NAMMAP', 'NAMGAZ': 'NAMGAZ', 'SJHNAM': 'SJHNAM', 'ARTINAM': 'ARTINAM', 'ASLBHS': 'ASLBHS', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'STATUS': 'STATUS', });
lyr_SPOTHEIGHT_PT_50K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'ELEVAS': 'ELEVAS', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'Z': 'Z', });
lyr_TOPONIMI_PT_50K_1.set('fieldImages', {'FCODE': '', 'NAMOBJ': '', 'ALIAS': '', 'LOKTPN': '', 'REMARK': '', 'KLSTPN': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'FTYPE': '', 'LAT': '', 'LON': '', 'KOORDY': '', 'KOORDX': '', 'KOORDINAT1': '', 'KORDINTAT2': '', 'LUAS': '', 'Elevasi': '', 'NAMLOK': '', 'NAMSPE': '', 'NAMMAP': '', 'NAMGAZ': '', 'SJHNAM': '', 'ARTINAM': '', 'ASLBHS': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'STATUS': '', });
lyr_SPOTHEIGHT_PT_50K_2.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'ELEVAS': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'Z': '', });
lyr_TOPONIMI_PT_50K_1.set('fieldLabels', {'FCODE': 'no label', 'NAMOBJ': 'no label', 'ALIAS': 'no label', 'LOKTPN': 'no label', 'REMARK': 'no label', 'KLSTPN': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FTYPE': 'no label', 'LAT': 'no label', 'LON': 'no label', 'KOORDY': 'no label', 'KOORDX': 'no label', 'KOORDINAT1': 'no label', 'KORDINTAT2': 'no label', 'LUAS': 'no label', 'Elevasi': 'no label', 'NAMLOK': 'no label', 'NAMSPE': 'no label', 'NAMMAP': 'no label', 'NAMGAZ': 'no label', 'SJHNAM': 'no label', 'ARTINAM': 'no label', 'ASLBHS': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'STATUS': 'no label', });
lyr_SPOTHEIGHT_PT_50K_2.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'inline label - visible with data', 'ELEVAS': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', 'SRS_ID': 'inline label - visible with data', 'LCODE': 'inline label - visible with data', 'METADATA': 'inline label - visible with data', 'Z': 'inline label - visible with data', });
lyr_SPOTHEIGHT_PT_50K_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});