const rawApiResult = {
	data: [
		{
			index: '2023-01-01T00:00:00',
			value: 16625.080078125,
		},
		{
			index: '2023-01-02T00:00:00',
			value: 16688.470703125,
		},
		{
			index: '2023-01-03T00:00:00',
			value: 16679.857421875,
		},
		{
			index: '2023-01-04T00:00:00',
			value: 16863.23828125,
		},
		{
			index: '2023-01-05T00:00:00',
			value: 16836.736328125,
		},
		{
			index: '2023-01-06T00:00:00',
			value: 16951.96875,
		},
		{
			index: '2023-01-07T00:00:00',
			value: 16955.078125,
		},
		{
			index: '2023-01-08T00:00:00',
			value: 17091.14453125,
		},
		{
			index: '2023-01-09T00:00:00',
			value: 17196.5546875,
		},
		{
			index: '2023-01-10T00:00:00',
			value: 17446.29296875,
		},
		{
			index: '2023-01-11T00:00:00',
			value: 17934.896484375,
		},
		{
			index: '2023-01-12T00:00:00',
			value: 18869.587890625,
		},
		{
			index: '2023-01-13T00:00:00',
			value: 19909.57421875,
		},
		{
			index: '2023-01-14T00:00:00',
			value: 20976.298828125,
		},
		{
			index: '2023-01-15T00:00:00',
			value: 20880.798828125,
		},
		{
			index: '2023-01-16T00:00:00',
			value: 21169.6328125,
		},
		{
			index: '2023-01-17T00:00:00',
			value: 21161.51953125,
		},
		{
			index: '2023-01-18T00:00:00',
			value: 20688.78125,
		},
		{
			index: '2023-01-19T00:00:00',
			value: 21086.79296875,
		},
		{
			index: '2023-01-20T00:00:00',
			value: 22676.552734375,
		},
		{
			index: '2023-01-21T00:00:00',
			value: 22777.625,
		},
		{
			index: '2023-01-22T00:00:00',
			value: 22720.416015625,
		},
		{
			index: '2023-01-23T00:00:00',
			value: 22934.431640625,
		},
		{
			index: '2023-01-24T00:00:00',
			value: 22636.46875,
		},
		{
			index: '2023-01-25T00:00:00',
			value: 23117.859375,
		},
		{
			index: '2023-01-26T00:00:00',
			value: 23032.77734375,
		},
		{
			index: '2023-01-27T00:00:00',
			value: 23078.728515625,
		},
		{
			index: '2023-01-28T00:00:00',
			value: 23031.08984375,
		},
		{
			index: '2023-01-29T00:00:00',
			value: 23774.56640625,
		},
		{
			index: '2023-01-30T00:00:00',
			value: 22840.138671875,
		},
		{
			index: '2023-01-31T00:00:00',
			value: 23139.283203125,
		},
		{
			index: '2023-02-01T00:00:00',
			value: 23723.76953125,
		},
		{
			index: '2023-02-02T00:00:00',
			value: 23471.87109375,
		},
		{
			index: '2023-02-03T00:00:00',
			value: 23449.322265625,
		},
		{
			index: '2023-02-04T00:00:00',
			value: 23331.84765625,
		},
		{
			index: '2023-02-05T00:00:00',
			value: 22955.666015625,
		},
		{
			index: '2023-02-06T00:00:00',
			value: 22760.109375,
		},
		{
			index: '2023-02-07T00:00:00',
			value: 23264.291015625,
		},
		{
			index: '2023-02-08T00:00:00',
			value: 22939.3984375,
		},
		{
			index: '2023-02-09T00:00:00',
			value: 21819.0390625,
		},
		{
			index: '2023-02-10T00:00:00',
			value: 21651.18359375,
		},
		{
			index: '2023-02-11T00:00:00',
			value: 21870.875,
		},
		{
			index: '2023-02-12T00:00:00',
			value: 21788.203125,
		},
		{
			index: '2023-02-13T00:00:00',
			value: 21808.1015625,
		},
		{
			index: '2023-02-14T00:00:00',
			value: 22220.8046875,
		},
		{
			index: '2023-02-15T00:00:00',
			value: 24307.841796875,
		},
		{
			index: '2023-02-16T00:00:00',
			value: 23623.474609375,
		},
		{
			index: '2023-02-17T00:00:00',
			value: 24565.6015625,
		},
		{
			index: '2023-02-18T00:00:00',
			value: 24641.27734375,
		},
		{
			index: '2023-02-19T00:00:00',
			value: 24327.642578125,
		},
		{
			index: '2023-02-20T00:00:00',
			value: 24829.1484375,
		},
		{
			index: '2023-02-21T00:00:00',
			value: 24436.353515625,
		},
		{
			index: '2023-02-22T00:00:00',
			value: 24188.84375,
		},
		{
			index: '2023-02-23T00:00:00',
			value: 23947.4921875,
		},
		{
			index: '2023-02-24T00:00:00',
			value: 23198.126953125,
		},
		{
			index: '2023-02-25T00:00:00',
			value: 23175.375,
		},
		{
			index: '2023-02-26T00:00:00',
			value: 23561.212890625,
		},
		{
			index: '2023-02-27T00:00:00',
			value: 23522.87109375,
		},
		{
			index: '2023-02-28T00:00:00',
			value: 23147.353515625,
		},
		{
			index: '2023-03-01T00:00:00',
			value: 23646.55078125,
		},
		{
			index: '2023-03-02T00:00:00',
			value: 23475.466796875,
		},
		{
			index: '2023-03-03T00:00:00',
			value: 22362.6796875,
		},
		{
			index: '2023-03-04T00:00:00',
			value: 22353.349609375,
		},
		{
			index: '2023-03-05T00:00:00',
			value: 22435.513671875,
		},
		{
			index: '2023-03-06T00:00:00',
			value: 22429.7578125,
		},
		{
			index: '2023-03-07T00:00:00',
			value: 22219.76953125,
		},
		{
			index: '2023-03-08T00:00:00',
			value: 21718.080078125,
		},
		{
			index: '2023-03-09T00:00:00',
			value: 20363.021484375,
		},
		{
			index: '2023-03-10T00:00:00',
			value: 20187.244140625,
		},
		{
			index: '2023-03-11T00:00:00',
			value: 20632.41015625,
		},
		{
			index: '2023-03-12T00:00:00',
			value: 22163.94921875,
		},
		{
			index: '2023-03-13T00:00:00',
			value: 24197.533203125,
		},
		{
			index: '2023-03-14T00:00:00',
			value: 24746.07421875,
		},
		{
			index: '2023-03-15T00:00:00',
			value: 24375.9609375,
		},
		{
			index: '2023-03-16T00:00:00',
			value: 25052.7890625,
		},
		{
			index: '2023-03-17T00:00:00',
			value: 27423.9296875,
		},
		{
			index: '2023-03-18T00:00:00',
			value: 26965.87890625,
		},
		{
			index: '2023-03-19T00:00:00',
			value: 28038.67578125,
		},
		{
			index: '2023-03-20T00:00:00',
			value: 27767.236328125,
		},
		{
			index: '2023-03-21T00:00:00',
			value: 28175.81640625,
		},
		{
			index: '2023-03-22T00:00:00',
			value: 27307.4375,
		},
		{
			index: '2023-03-23T00:00:00',
			value: 28333.97265625,
		},
		{
			index: '2023-03-24T00:00:00',
			value: 27493.28515625,
		},
		{
			index: '2023-03-25T00:00:00',
			value: 27494.70703125,
		},
		{
			index: '2023-03-26T00:00:00',
			value: 27994.330078125,
		},
		{
			index: '2023-03-27T00:00:00',
			value: 27139.888671875,
		},
		{
			index: '2023-03-28T00:00:00',
			value: 27268.130859375,
		},
		{
			index: '2023-03-29T00:00:00',
			value: 28348.44140625,
		},
		{
			index: '2023-03-30T00:00:00',
			value: 28033.5625,
		},
		{
			index: '2023-03-31T00:00:00',
			value: 28478.484375,
		},
		{
			index: '2023-04-01T00:00:00',
			value: 28411.03515625,
		},
		{
			index: '2023-04-02T00:00:00',
			value: 28199.30859375,
		},
		{
			index: '2023-04-03T00:00:00',
			value: 27790.220703125,
		},
		{
			index: '2023-04-04T00:00:00',
			value: 28168.08984375,
		},
		{
			index: '2023-04-05T00:00:00',
			value: 28177.984375,
		},
		{
			index: '2023-04-06T00:00:00',
			value: 28044.140625,
		},
		{
			index: '2023-04-07T00:00:00',
			value: 27925.859375,
		},
		{
			index: '2023-04-08T00:00:00',
			value: 27947.794921875,
		},
		{
			index: '2023-04-09T00:00:00',
			value: 28333.05078125,
		},
		{
			index: '2023-04-10T00:00:00',
			value: 29652.98046875,
		},
		{
			index: '2023-04-11T00:00:00',
			value: 30235.05859375,
		},
		{
			index: '2023-04-12T00:00:00',
			value: 30139.052734375,
		},
		{
			index: '2023-04-13T00:00:00',
			value: 30399.06640625,
		},
		{
			index: '2023-04-14T00:00:00',
			value: 30485.69921875,
		},
		{
			index: '2023-04-15T00:00:00',
			value: 30318.49609375,
		},
		{
			index: '2023-04-16T00:00:00',
			value: 30315.35546875,
		},
		{
			index: '2023-04-17T00:00:00',
			value: 29445.044921875,
		},
		{
			index: '2023-04-18T00:00:00',
			value: 30397.552734375,
		},
		{
			index: '2023-04-19T00:00:00',
			value: 28822.6796875,
		},
		{
			index: '2023-04-20T00:00:00',
			value: 28245.98828125,
		},
		{
			index: '2023-04-21T00:00:00',
			value: 27276.91015625,
		},
		{
			index: '2023-04-22T00:00:00',
			value: 27817.5,
		},
		{
			index: '2023-04-23T00:00:00',
			value: 27591.384765625,
		},
		{
			index: '2023-04-24T00:00:00',
			value: 27525.33984375,
		},
		{
			index: '2023-04-25T00:00:00',
			value: 28307.59765625,
		},
		{
			index: '2023-04-26T00:00:00',
			value: 28422.701171875,
		},
		{
			index: '2023-04-27T00:00:00',
			value: 29473.787109375,
		},
		{
			index: '2023-04-28T00:00:00',
			value: 29340.26171875,
		},
		{
			index: '2023-04-29T00:00:00',
			value: 29248.48828125,
		},
		{
			index: '2023-04-30T00:00:00',
			value: 29268.806640625,
		},
		{
			index: '2023-05-01T00:00:00',
			value: 28091.568359375,
		},
		{
			index: '2023-05-02T00:00:00',
			value: 28680.537109375,
		},
		{
			index: '2023-05-03T00:00:00',
			value: 29006.30859375,
		},
		{
			index: '2023-05-04T00:00:00',
			value: 28847.7109375,
		},
		{
			index: '2023-05-05T00:00:00',
			value: 29534.384765625,
		},
		{
			index: '2023-05-06T00:00:00',
			value: 28904.623046875,
		},
		{
			index: '2023-05-07T00:00:00',
			value: 28454.978515625,
		},
		{
			index: '2023-05-08T00:00:00',
			value: 27694.2734375,
		},
		{
			index: '2023-05-09T00:00:00',
			value: 27658.775390625,
		},
		{
			index: '2023-05-10T00:00:00',
			value: 27621.755859375,
		},
		{
			index: '2023-05-11T00:00:00',
			value: 27000.7890625,
		},
		{
			index: '2023-05-12T00:00:00',
			value: 26804.990234375,
		},
		{
			index: '2023-05-13T00:00:00',
			value: 26784.078125,
		},
		{
			index: '2023-05-14T00:00:00',
			value: 26930.638671875,
		},
		{
			index: '2023-05-15T00:00:00',
			value: 27192.693359375,
		},
		{
			index: '2023-05-16T00:00:00',
			value: 27036.650390625,
		},
		{
			index: '2023-05-17T00:00:00',
			value: 27398.802734375,
		},
		{
			index: '2023-05-18T00:00:00',
			value: 26832.208984375,
		},
		{
			index: '2023-05-19T00:00:00',
			value: 26890.12890625,
		},
		{
			index: '2023-05-20T00:00:00',
			value: 27129.5859375,
		},
		{
			index: '2023-05-21T00:00:00',
			value: 26753.826171875,
		},
		{
			index: '2023-05-22T00:00:00',
			value: 26851.27734375,
		},
		{
			index: '2023-05-23T00:00:00',
			value: 27225.7265625,
		},
		{
			index: '2023-05-24T00:00:00',
			value: 26334.818359375,
		},
		{
			index: '2023-05-25T00:00:00',
			value: 26476.20703125,
		},
		{
			index: '2023-05-26T00:00:00',
			value: 26719.291015625,
		},
		{
			index: '2023-05-27T00:00:00',
			value: 26868.353515625,
		},
		{
			index: '2023-05-28T00:00:00',
			value: 28085.646484375,
		},
		{
			index: '2023-05-29T00:00:00',
			value: 27745.884765625,
		},
		{
			index: '2023-05-30T00:00:00',
			value: 27702.349609375,
		},
		{
			index: '2023-05-31T00:00:00',
			value: 27219.658203125,
		},
		{
			index: '2023-06-01T00:00:00',
			value: 26819.97265625,
		},
		{
			index: '2023-06-02T00:00:00',
			value: 27249.58984375,
		},
		{
			index: '2023-06-03T00:00:00',
			value: 27075.12890625,
		},
		{
			index: '2023-06-04T00:00:00',
			value: 27119.06640625,
		},
		{
			index: '2023-06-05T00:00:00',
			value: 25760.09765625,
		},
		{
			index: '2023-06-06T00:00:00',
			value: 27238.783203125,
		},
		{
			index: '2023-06-07T00:00:00',
			value: 26345.998046875,
		},
		{
			index: '2023-06-08T00:00:00',
			value: 26508.216796875,
		},
		{
			index: '2023-06-09T00:00:00',
			value: 26480.375,
		},
		{
			index: '2023-06-10T00:00:00',
			value: 25851.240234375,
		},
		{
			index: '2023-06-11T00:00:00',
			value: 25940.16796875,
		},
		{
			index: '2023-06-12T00:00:00',
			value: 25902.5,
		},
		{
			index: '2023-06-13T00:00:00',
			value: 25918.728515625,
		},
		{
			index: '2023-06-14T00:00:00',
			value: 25124.67578125,
		},
		{
			index: '2023-06-15T00:00:00',
			value: 25576.39453125,
		},
		{
			index: '2023-06-16T00:00:00',
			value: 26327.462890625,
		},
		{
			index: '2023-06-17T00:00:00',
			value: 26510.67578125,
		},
		{
			index: '2023-06-18T00:00:00',
			value: 26336.212890625,
		},
		{
			index: '2023-06-19T00:00:00',
			value: 26851.029296875,
		},
		{
			index: '2023-06-20T00:00:00',
			value: 28327.48828125,
		},
		{
			index: '2023-06-21T00:00:00',
			value: 30027.296875,
		},
		{
			index: '2023-06-22T00:00:00',
			value: 29912.28125,
		},
		{
			index: '2023-06-23T00:00:00',
			value: 30695.46875,
		},
		{
			index: '2023-06-24T00:00:00',
			value: 30548.6953125,
		},
		{
			index: '2023-06-25T00:00:00',
			value: 30480.26171875,
		},
		{
			index: '2023-06-26T00:00:00',
			value: 30271.130859375,
		},
		{
			index: '2023-06-27T00:00:00',
			value: 30688.1640625,
		},
		{
			index: '2023-06-28T00:00:00',
			value: 30086.24609375,
		},
		{
			index: '2023-06-29T00:00:00',
			value: 30445.3515625,
		},
		{
			index: '2023-06-30T00:00:00',
			value: 30477.251953125,
		},
		{
			index: '2023-07-01T00:00:00',
			value: 30590.078125,
		},
		{
			index: '2023-07-02T00:00:00',
			value: 30620.76953125,
		},
		{
			index: '2023-07-03T00:00:00',
			value: 31156.439453125,
		},
		{
			index: '2023-07-04T00:00:00',
			value: 30777.58203125,
		},
		{
			index: '2023-07-05T00:00:00',
			value: 30514.166015625,
		},
		{
			index: '2023-07-06T00:00:00',
			value: 29909.337890625,
		},
		{
			index: '2023-07-07T00:00:00',
			value: 30342.265625,
		},
		{
			index: '2023-07-08T00:00:00',
			value: 30292.541015625,
		},
		{
			index: '2023-07-09T00:00:00',
			value: 30171.234375,
		},
		{
			index: '2023-07-10T00:00:00',
			value: 30414.470703125,
		},
		{
			index: '2023-07-11T00:00:00',
			value: 30620.951171875,
		},
		{
			index: '2023-07-12T00:00:00',
			value: 30391.646484375,
		},
		{
			index: '2023-07-13T00:00:00',
			value: 31476.048828125,
		},
		{
			index: '2023-07-14T00:00:00',
			value: 30334.068359375,
		},
		{
			index: '2023-07-15T00:00:00',
			value: 30295.806640625,
		},
		{
			index: '2023-07-16T00:00:00',
			value: 30249.1328125,
		},
		{
			index: '2023-07-17T00:00:00',
			value: 30145.888671875,
		},
		{
			index: '2023-07-18T00:00:00',
			value: 29856.5625,
		},
		{
			index: '2023-07-19T00:00:00',
			value: 29913.923828125,
		},
		{
			index: '2023-07-20T00:00:00',
			value: 29792.015625,
		},
		{
			index: '2023-07-21T00:00:00',
			value: 29908.744140625,
		},
		{
			index: '2023-07-22T00:00:00',
			value: 29771.802734375,
		},
		{
			index: '2023-07-23T00:00:00',
			value: 30084.5390625,
		},
		{
			index: '2023-07-24T00:00:00',
			value: 29176.916015625,
		},
		{
			index: '2023-07-25T00:00:00',
			value: 29227.390625,
		},
		{
			index: '2023-07-26T00:00:00',
			value: 29354.97265625,
		},
		{
			index: '2023-07-27T00:00:00',
			value: 29210.689453125,
		},
		{
			index: '2023-07-28T00:00:00',
			value: 29319.24609375,
		},
		{
			index: '2023-07-29T00:00:00',
			value: 29356.91796875,
		},
		{
			index: '2023-07-30T00:00:00',
			value: 29275.30859375,
		},
		{
			index: '2023-07-31T00:00:00',
			value: 29230.111328125,
		},
		{
			index: '2023-08-01T00:00:00',
			value: 29675.732421875,
		},
		{
			index: '2023-08-02T00:00:00',
			value: 29151.958984375,
		},
		{
			index: '2023-08-03T00:00:00',
			value: 29178.6796875,
		},
		{
			index: '2023-08-04T00:00:00',
			value: 29074.091796875,
		},
		{
			index: '2023-08-05T00:00:00',
			value: 29042.126953125,
		},
		{
			index: '2023-08-06T00:00:00',
			value: 29041.85546875,
		},
		{
			index: '2023-08-07T00:00:00',
			value: 29180.578125,
		},
		{
			index: '2023-08-08T00:00:00',
			value: 29765.4921875,
		},
		{
			index: '2023-08-09T00:00:00',
			value: 29561.494140625,
		},
		{
			index: '2023-08-10T00:00:00',
			value: 29429.591796875,
		},
		{
			index: '2023-08-11T00:00:00',
			value: 29397.71484375,
		},
		{
			index: '2023-08-12T00:00:00',
			value: 29415.96484375,
		},
		{
			index: '2023-08-13T00:00:00',
			value: 29282.9140625,
		},
		{
			index: '2023-08-14T00:00:00',
			value: 29408.443359375,
		},
		{
			index: '2023-08-15T00:00:00',
			value: 29170.34765625,
		},
		{
			index: '2023-08-16T00:00:00',
			value: 28701.779296875,
		},
		{
			index: '2023-08-17T00:00:00',
			value: 26664.55078125,
		},
		{
			index: '2023-08-18T00:00:00',
			value: 26049.556640625,
		},
		{
			index: '2023-08-19T00:00:00',
			value: 26096.205078125,
		},
		{
			index: '2023-08-20T00:00:00',
			value: 26189.583984375,
		},
		{
			index: '2023-08-21T00:00:00',
			value: 26124.140625,
		},
		{
			index: '2023-08-22T00:00:00',
			value: 26031.65625,
		},
		{
			index: '2023-08-23T00:00:00',
			value: 26431.640625,
		},
		{
			index: '2023-08-24T00:00:00',
			value: 26162.373046875,
		},
		{
			index: '2023-08-25T00:00:00',
			value: 26047.66796875,
		},
		{
			index: '2023-08-26T00:00:00',
			value: 26008.462890625,
		},
		{
			index: '2023-08-27T00:00:00',
			value: 26089.693359375,
		},
		{
			index: '2023-08-28T00:00:00',
			value: 26106.150390625,
		},
		{
			index: '2023-08-29T00:00:00',
			value: 27727.392578125,
		},
		{
			index: '2023-08-30T00:00:00',
			value: 27297.265625,
		},
		{
			index: '2023-08-31T00:00:00',
			value: 25931.47265625,
		},
		{
			index: '2023-09-01T00:00:00',
			value: 25800.724609375,
		},
		{
			index: '2023-09-02T00:00:00',
			value: 25868.798828125,
		},
		{
			index: '2023-09-03T00:00:00',
			value: 25969.56640625,
		},
		{
			index: '2023-09-04T00:00:00',
			value: 25812.416015625,
		},
		{
			index: '2023-09-05T00:00:00',
			value: 25779.982421875,
		},
		{
			index: '2023-09-06T00:00:00',
			value: 25753.236328125,
		},
		{
			index: '2023-09-07T00:00:00',
			value: 26240.1953125,
		},
		{
			index: '2023-09-08T00:00:00',
			value: 25905.654296875,
		},
		{
			index: '2023-09-09T00:00:00',
			value: 25895.677734375,
		},
		{
			index: '2023-09-10T00:00:00',
			value: 25832.2265625,
		},
		{
			index: '2023-09-11T00:00:00',
			value: 25162.654296875,
		},
		{
			index: '2023-09-12T00:00:00',
			value: 25833.34375,
		},
		{
			index: '2023-09-13T00:00:00',
			value: 26228.32421875,
		},
		{
			index: '2023-09-14T00:00:00',
			value: 26539.673828125,
		},
		{
			index: '2023-09-15T00:00:00',
			value: 26608.693359375,
		},
		{
			index: '2023-09-16T00:00:00',
			value: 26568.28125,
		},
		{
			index: '2023-09-17T00:00:00',
			value: 26534.1875,
		},
		{
			index: '2023-09-18T00:00:00',
			value: 26754.28125,
		},
		{
			index: '2023-09-19T00:00:00',
			value: 27211.1171875,
		},
		{
			index: '2023-09-20T00:00:00',
			value: 27132.0078125,
		},
		{
			index: '2023-09-21T00:00:00',
			value: 26567.6328125,
		},
		{
			index: '2023-09-22T00:00:00',
			value: 26579.568359375,
		},
		{
			index: '2023-09-23T00:00:00',
			value: 26579.390625,
		},
		{
			index: '2023-09-24T00:00:00',
			value: 26256.826171875,
		},
		{
			index: '2023-09-25T00:00:00',
			value: 26298.48046875,
		},
		{
			index: '2023-09-26T00:00:00',
			value: 26217.25,
		},
		{
			index: '2023-09-27T00:00:00',
			value: 26352.716796875,
		},
		{
			index: '2023-09-28T00:00:00',
			value: 27021.546875,
		},
		{
			index: '2023-09-29T00:00:00',
			value: 26911.720703125,
		},
		{
			index: '2023-09-30T00:00:00',
			value: 26967.916015625,
		},
		{
			index: '2023-10-01T00:00:00',
			value: 27983.75,
		},
		{
			index: '2023-10-02T00:00:00',
			value: 27530.78515625,
		},
		{
			index: '2023-10-03T00:00:00',
			value: 27429.978515625,
		},
		{
			index: '2023-10-04T00:00:00',
			value: 27799.39453125,
		},
		{
			index: '2023-10-05T00:00:00',
			value: 27415.912109375,
		},
		{
			index: '2023-10-06T00:00:00',
			value: 27946.59765625,
		},
		{
			index: '2023-10-07T00:00:00',
			value: 27968.83984375,
		},
		{
			index: '2023-10-08T00:00:00',
			value: 27935.08984375,
		},
		{
			index: '2023-10-09T00:00:00',
			value: 27583.677734375,
		},
		{
			index: '2023-10-10T00:00:00',
			value: 27391.01953125,
		},
		{
			index: '2023-10-11T00:00:00',
			value: 26873.3203125,
		},
		{
			index: '2023-10-12T00:00:00',
			value: 26756.798828125,
		},
		{
			index: '2023-10-13T00:00:00',
			value: 26862.375,
		},
		{
			index: '2023-10-14T00:00:00',
			value: 26861.70703125,
		},
		{
			index: '2023-10-15T00:00:00',
			value: 27159.65234375,
		},
		{
			index: '2023-10-16T00:00:00',
			value: 28519.466796875,
		},
		{
			index: '2023-10-17T00:00:00',
			value: 28415.748046875,
		},
		{
			index: '2023-10-18T00:00:00',
			value: 28328.341796875,
		},
		{
			index: '2023-10-19T00:00:00',
			value: 28719.806640625,
		},
		{
			index: '2023-10-20T00:00:00',
			value: 29682.94921875,
		},
		{
			index: '2023-10-21T00:00:00',
			value: 29918.412109375,
		},
		{
			index: '2023-10-22T00:00:00',
			value: 29993.896484375,
		},
		{
			index: '2023-10-23T00:00:00',
			value: 33086.234375,
		},
		{
			index: '2023-10-24T00:00:00',
			value: 33901.52734375,
		},
		{
			index: '2023-10-25T00:00:00',
			value: 34502.8203125,
		},
		{
			index: '2023-10-26T00:00:00',
			value: 34156.6484375,
		},
		{
			index: '2023-10-27T00:00:00',
			value: 33909.80078125,
		},
		{
			index: '2023-10-28T00:00:00',
			value: 34089.57421875,
		},
		{
			index: '2023-10-29T00:00:00',
			value: 34538.48046875,
		},
		{
			index: '2023-10-30T00:00:00',
			value: 34502.36328125,
		},
		{
			index: '2023-10-31T00:00:00',
			value: 34667.78125,
		},
	],
	title: 'BTC-USD Performance',
	subtitle: 'Prices in USD',
};

export const nerdyFinancePriceChartData = {
	...rawApiResult,
	data: rawApiResult.data.map((it) => ({...it, index: new Date(it.index)})),
};
