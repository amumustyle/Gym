// 作者：舒慕蓉amumustyle
function randomData() {
    return Math.round(Math.random()*1000);
}

    var myChart2 = echarts.init(document.getElementById('myChart2'));
    var myChart3 = echarts.init(document.getElementById('myChart3'));
    var myChart4 = echarts.init(document.getElementById('myChart4'));
    var myChart5 = echarts.init(document.getElementById('myChart5'));
    var myChart6 = echarts.init(document.getElementById('myChart6'));
    var myChart7 = echarts.init(document.getElementById('myChart7'));
    var myChart8 = echarts.init(document.getElementById('myChart8'));
    var myChart9 = echarts.init(document.getElementById('myChart9'));
        // 指定图表的配置项和数据
        //option2各级学员培养层次分布
        var option2 = {
            title: {
                // text: '各级学员培养层次分布',
                subtext: '人数'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['博士生','硕士生','本科生']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2012级','2013级','2014级','2015级','2016级','2017级']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name:'博士生',
                    type:'line',
                    stack: '总量',
                    data:[132, 101, 134, 90, 230, 410]
                },
                {
                    name:'硕士生',
                    type:'line',
                    stack: '总量',
                    data:[182, 191, 234, 290, 330, 610]
                },
                {
                    name:'本科生',
                    type:'line',
                    stack: '总量',
                    data:[232, 201, 454, 590, 790, 1000]
                }
            ]
        };
//option3性别分布
        option3 = {
		    title : {
		        x:'center'
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        left: 'left',
		        data: ['女','男']
		    },
		    series : [
		        {
		            name: '性别分布',
		            type: 'pie',
		            radius : '55%',
		            center: ['50%', '60%'],
		            data:[
		                {value:835, name:'女'},
		                {value:1548, name:'男'}
		            ],
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }
		    ]
		};
//option4各级学员地域分布
	option4 = {
    baseOption: {
        timeline: {
            // y: 0,
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: false,
            // currentIndex: 2,
            playInterval: 1000,
            controlStyle: {
                position: 'left'
            },
            data: [
                '2012级','2013级','2014级','2015级','2016级'
            ],
            label: {
                formatter : function(s) {
                    return s;
                }
            }
        },
        title: {
        },
        tooltip: {
        	trigger: 'item'
        },
        visualMap: {
	        min: 0,
	        max: 2500,
	        left: 'left',
	        top: 'bottom',
	        text: ['高','低'],           // 文本，默认为数值文本
	        calculable: true
	    },
        
        series: [

            {name: '年级',type: 'map',mapType: 'china',roam: true,
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            }}
        ]
	    },
	    options: [
	        {
            series: [  
                {
		            name: '2012级',
		            type: 'map',
		            mapType: 'china',
		            roam: true,
		            label: {
		                normal: {
		                    show: true
		                },
		                emphasis: {
		                    show: true
		                }
		            },
		            data:[
		                {name: '北京',value: 111 },
		                {name: '天津',value: 222 },
		                {name: '上海',value: 333 },
		                {name: '重庆',value: 444 },
		                {name: '河北',value: 123 },
		                {name: '河南',value: 223 },
		                {name: '云南',value: randomData() },
		                {name: '辽宁',value: randomData() },
		                {name: '黑龙江',value: randomData() },
		                {name: '山西',value: randomData() },
		                {name: '内蒙古',value: randomData() },
		                {name: '陕西',value: randomData() },
		                {name: '吉林',value: randomData() },
		                {name: '福建',value: randomData() },
		                {name: '贵州',value: 555 },
		                {name: '广东',value: 500 },
		                {name: '西藏',value: 200 },
		                {name: '新疆',value: 50 },
		                {name: '青海',value: 300 },
		                {name: '台湾',value: randomData() },
		                {name: '香港',value: randomData() },
		                {name: '澳门',value: randomData() }
		            ]
		        }]
	        },
	        {
            series: [  
                {
		            name: '2013级',
		            type: 'map',
		            mapType: 'china',
		            roam: true,
		            label: {
		                normal: {
		                    show: true
		                },
		                emphasis: {
		                    show: true
		                }
		            },
		            data:[
		                {name: '北京',value: 111 },
		                {name: '天津',value: 122 },
		                {name: '上海',value: 233 },
		                {name: '重庆',value: 444 },
		                {name: '河北',value: 123 },
		                {name: '河南',value: 223 },
		                {name: '云南',value: randomData() },
		                {name: '辽宁',value: randomData() },
		                {name: '黑龙江',value: randomData() },
		                {name: '山西',value: randomData() },
		                {name: '内蒙古',value: 300 },
		                {name: '陕西',value: randomData() },
		                {name: '吉林',value: randomData() },
		                {name: '福建',value: randomData() },
		                {name: '贵州',value: 555 },
		                {name: '新疆',value: 50 },
		                {name: '台湾',value: randomData() },
		                {name: '香港',value: randomData() },
		                {name: '澳门',value: randomData() }
		            ]
		        }]
	        },
	        {
            series: [  
                {
		            name: '2014级',
		            type: 'map',
		            mapType: 'china',
		            roam: true,
		            label: {
		                normal: {
		                    show: true
		                },
		                emphasis: {
		                    show: true
		                }
		            },
		            data:[
		                {name: '北京',value: 111 },
		                {name: '天津',value: 122 },
		                {name: '上海',value: 233 },
		                {name: '重庆',value: 444 },
		                {name: '河北',value: 123 },
		                {name: '河南',value: 223 },
		                {name: '云南',value: randomData() },
		                {name: '辽宁',value: randomData() },
		                {name: '黑龙江',value: randomData() },
		                {name: '山西',value: randomData() },
		                {name: '内蒙古',value: 300 },
		                {name: '陕西',value: randomData() },
		                {name: '吉林',value: randomData() },
		                {name: '福建',value: randomData() },
		                {name: '贵州',value: 555 },
		                {name: '新疆',value: 50 },
		                {name: '台湾',value: randomData() },
		                {name: '香港',value: randomData() },
		                {name: '澳门',value: randomData() }
		            ]
		        }]
	        },
	        {
            series: [  
                {
		            name: '2015级',
		            type: 'map',
		            mapType: 'china',
		            roam: true,
		            label: {
		                normal: {
		                    show: true
		                },
		                emphasis: {
		                    show: true
		                }
		            },
		            data:[
		                {name: '北京',value: 111 },
		                {name: '天津',value: 122 },
		                {name: '上海',value: 233 },
		                {name: '重庆',value: 444 },
		                {name: '河北',value: 123 },
		                {name: '河南',value: 223 },
		                {name: '云南',value: randomData() },
		                {name: '辽宁',value: randomData() },
		                {name: '黑龙江',value: randomData() },
		                {name: '山西',value: randomData() },
		                {name: '内蒙古',value: 300 },
		                {name: '陕西',value: randomData() },
		                {name: '吉林',value: randomData() },
		                {name: '福建',value: randomData() },
		                {name: '贵州',value: 555 },
		                {name: '新疆',value: 50 },
		                {name: '台湾',value: randomData() },
		                {name: '香港',value: randomData() },
		                {name: '澳门',value: randomData() }
		            ]
		        }]
	        },
	        {
            series: [  
                {
		            name: '2016级',
		            type: 'map',
		            mapType: 'china',
		            roam: true,
		            label: {
		                normal: {
		                    show: true
		                },
		                emphasis: {
		                    show: true
		                }
		            },
		            data:[
		                {name: '北京',value: 111 },
		                {name: '天津',value: 122 },
		                {name: '上海',value: 233 },
		                {name: '重庆',value: 444 },
		                {name: '河北',value: 123 },
		                {name: '河南',value: 223 },
		                {name: '云南',value: randomData() },
		                {name: '辽宁',value: randomData() },
		                {name: '黑龙江',value: randomData() },
		                {name: '山西',value: randomData() },
		                {name: '内蒙古',value: 300 },
		                {name: '陕西',value: randomData() },
		                {name: '吉林',value: randomData() },
		                {name: '福建',value: randomData() },
		                {name: '贵州',value: 555 },
		                {name: '广东',value: 300 },
		                {name: '西藏',value: 200 },
		                {name: '新疆',value: 50 },
		                {name: '青海',value: 300 },
		                {name: '台湾',value: randomData() },
		                {name: '香港',value: randomData() },
		                {name: '澳门',value: randomData() }
		            ]
		        }]
	        }
	    ]
	};
//option5学院各级学员培养层次分布
var dataMap = {};
function dataFormatter(obj) {
    var pList = ['法学院','数学院','体育院','生物院','艺术院','计算机院','天文系'];
    return obj;
}

dataMap.dataPI = dataFormatter({
    //博士
    2016:[50,60,70,90,120,80,150],
    2015:[60,20,100,90,120,100,150],
    2014:[50,60,70,90,120,80,150],
    2013:[50,60,70,90,120,80,150],
    2012:[50,60,70,90,120,80,150]
});

dataMap.dataSI = dataFormatter({
    //硕士
    2016:[30,70,90,130,140,290,150],
    2015:[50,60,70,90,120,80,150],
    2014:[50,60,70,90,120,80,150],
    2013:[50,60,70,90,120,80,150],
    2012:[50,60,70,90,120,80,150]
});

dataMap.dataTI = dataFormatter({
    //本科
   2016:[100,160,120,190,220,80,150],
    2015:[50,60,70,90,120,80,150],
    2014:[50,60,70,90,120,80,150],
    2013:[50,60,70,90,120,80,150],
    2012:[50,60,70,90,120,80,150]
});


option5 = {
    baseOption: {
        timeline: {
            // y: 0,
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: false,
            // currentIndex: 2,
            playInterval: 1000,
            controlStyle: {
                position: 'left'
            },
            data: [
                '2012级','2013级','2014级','2015级','2016级'
            ],
            label: {
                formatter : function(s) {
                    return s;
                }
            }
        },
        title: {
        },
        tooltip: {
        },
        legend: {
            x: 'center',
            data: ['博士生', '硕士生', '本科生'],
        },
        calculable : true,
        grid: {

            top: 50,
            bottom: 100,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    label: {
                        show: true,
                        formatter: function (params) {
                            return params.value.replace('\n', '');
                        }
                    }
                }
            }
        },
        xAxis: [
            {
                'type':'category',
                // 'axisLabel':{'interval':0},
                'data':[
                    '法学院','\n数学院','体育院','\n生物院','艺术院','\n计算机院','天文系'
                ]
                // splitLine: {show: false}
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '人数'
            }
        ],
        series: [
            {name: '博士生', type: 'bar',stack: '广告'},
            {name: '硕士生', type: 'bar',stack: '广告'},
            {name: '本科生', type: 'bar',stack: '广告'},
        ]
	    },
	    options: [
	        {
	            series: [       
	                {data: dataMap.dataPI['2012']},
	                {data: dataMap.dataSI['2012']},
	                {data: dataMap.dataTI['2012']},
	            ]
	        },
	        {
	            series : [
	                {data: dataMap.dataPI['2013']},
	                {data: dataMap.dataSI['2013']},
	                {data: dataMap.dataTI['2013']},
	            ]
	        },
	        {
	            series : [
	                {data: dataMap.dataPI['2014']},
	                {data: dataMap.dataSI['2014']},
	                {data: dataMap.dataTI['2014']},
	            ]
	        },
	        {
	            series : [
	                {data: dataMap.dataPI['2015']},
	                {data: dataMap.dataSI['2015']},
	                {data: dataMap.dataTI['2015']},
	            ]
	        },
	        {
	            series : [
	                {data: dataMap.dataPI['2016']},
	                {data: dataMap.dataSI['2016']},
	                {data: dataMap.dataTI['2016']},
	            ]
	        }
	    ]
	};
//option6师资分布
option6 = {
	    title : {
	        x:'center'
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
	        left: 'left',
	        data: ['教授','副教授','讲师','助理研究员','副研究员','其他职称']
	    },
	    series : [
	        {
	            name: '师资分布',
	            type: 'pie',
	            radius : '55%',
	            center: ['50%', '50%'],
	            data:[
	                {value:335, name:'教授'},
	                {value:310, name:'副教授'},
	                {value:234, name:'讲师'},
	                {value:135, name:'助理研究员'},
	                {value:548, name:'副研究员'},
	                {value:1000, name:'其他职称'}
	            ],
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
	        }
	    ]
	};
//option7各学期地域成绩分布
	option7 = {
    baseOption: {
        timeline: {
            // y: 0,
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: false,
            // currentIndex: 2,
            playInterval: 1000,

            controlStyle: {
                position: 'left'
            },
            data: [
                '2013-2014-1学期','2013-2014-2学期','2014-2015-1学期','2014-2015-2学期','2015-2016-1学期','2015-2016-2学期'
            ],
            label: {

            	interval: 'auto',
                formatter : function(s) {
                    return s;
                }
            }
        },
        title: {
        },
        tooltip: {
        	trigger: 'item'
        },
        visualMap: {
	        min: 0,
	        max: 2500,
	        left: 'left',
	        top: 'bottom',
	        text: ['高','低'],           // 文本，默认为数值文本
	        calculable: true
	    },
        
        series: [

            {name: '学期',type: 'map',mapType: 'china',roam: true,
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            }},
        ]
	    },
	    options: [
	        {
            series: [  
                {
		            name: '2013-2014-1学期',
		            type: 'map',
		            mapType: 'china',
		            roam: true,
		            label: {
		                normal: {
		                    show: true
		                },
		                emphasis: {
		                    show: true
		                }
		            },
		            data:[
		                {name: '北京',value: 111 },
		                {name: '天津',value: 222 },
		                {name: '上海',value: 333 },
		                {name: '重庆',value: 444 },
		                {name: '河北',value: 123 },
		                {name: '河南',value: 223 },
		                {name: '云南',value: randomData() },
		                {name: '辽宁',value: randomData() },
		                {name: '黑龙江',value: randomData() },
		                {name: '山西',value: randomData() },
		                {name: '内蒙古',value: randomData() },
		                {name: '陕西',value: randomData() },
		                {name: '吉林',value: randomData() },
		                {name: '福建',value: randomData() },
		                {name: '贵州',value: 555 },
		                {name: '广东',value: 300 },
		                {name: '西藏',value: 200 },
		                {name: '新疆',value: 50 },
		                {name: '青海',value: 300 },
		                {name: '台湾',value: randomData() },
		                {name: '香港',value: randomData() },
		                {name: '澳门',value: randomData() }
		            ]
		        }]
	        },
	        {
            series: [  
                {
		            name: '2013-2014-2学期',
		            type: 'map',
		            mapType: 'china',
		            roam: true,
		            label: {
		                normal: {
		                    show: true
		                },
		                emphasis: {
		                    show: true
		                }
		            },
		            data:[
		                {name: '北京',value: 111 },
		                {name: '天津',value: 122 },
		                {name: '上海',value: 233 },
		                {name: '重庆',value: 444 },
		                {name: '河北',value: 123 },
		                {name: '河南',value: 223 },
		                {name: '云南',value: randomData() },
		                {name: '辽宁',value: randomData() },
		                {name: '黑龙江',value: randomData() },
		                {name: '山西',value: randomData() },
		                {name: '内蒙古',value: 300 },
		                {name: '陕西',value: randomData() },
		                {name: '吉林',value: randomData() },
		                {name: '福建',value: randomData() },
		                {name: '贵州',value: 555 },
		                {name: '新疆',value: 50 },
		                {name: '台湾',value: randomData() },
		                {name: '香港',value: randomData() },
		                {name: '澳门',value: randomData() }
		            ]
		        }]
	        },
	        {
            series: [  
                {
		            name: '2014-2015-1学期',
		            type: 'map',
		            mapType: 'china',
		            roam: true,
		            label: {
		                normal: {
		                    show: true
		                },
		                emphasis: {
		                    show: true
		                }
		            },
		            data:[
		                {name: '北京',value: 111 },
		                {name: '天津',value: 122 },
		                {name: '上海',value: 233 },
		                {name: '重庆',value: 444 },
		                {name: '河北',value: 123 },
		                {name: '河南',value: 223 },
		                {name: '云南',value: randomData() },
		                {name: '辽宁',value: randomData() },
		                {name: '黑龙江',value: randomData() },
		                {name: '山西',value: randomData() },
		                {name: '内蒙古',value: 300 },
		                {name: '陕西',value: randomData() },
		                {name: '吉林',value: randomData() },
		                {name: '福建',value: randomData() },
		                {name: '贵州',value: 555 },
		                {name: '新疆',value: 50 },
		                {name: '台湾',value: randomData() },
		                {name: '香港',value: randomData() },
		                {name: '澳门',value: randomData() }
		            ]
		        }]
	        },
	        {
            series: [  
                {
		            name: '2014-2015-2学期',
		            type: 'map',
		            mapType: 'china',
		            roam: true,
		            label: {
		                normal: {
		                    show: true
		                },
		                emphasis: {
		                    show: true
		                }
		            },
		            data:[
		                {name: '北京',value: 111 },
		                {name: '天津',value: 122 },
		                {name: '上海',value: 233 },
		                {name: '重庆',value: 444 },
		                {name: '河北',value: 123 },
		                {name: '河南',value: 223 },
		                {name: '云南',value: randomData() },
		                {name: '辽宁',value: randomData() },
		                {name: '黑龙江',value: randomData() },
		                {name: '山西',value: randomData() },
		                {name: '内蒙古',value: 300 },
		                {name: '陕西',value: randomData() },
		                {name: '吉林',value: randomData() },
		                {name: '福建',value: randomData() },
		                {name: '贵州',value: 555 },
		                {name: '新疆',value: 50 },
		                {name: '台湾',value: randomData() },
		                {name: '香港',value: randomData() },
		                {name: '澳门',value: randomData() }
		            ]
		        }]
	        },
	        {
            series: [  
                {
		            name: '2015-2016-1学期',
		            type: 'map',
		            mapType: 'china',
		            roam: true,
		            label: {
		                normal: {
		                    show: true
		                },
		                emphasis: {
		                    show: true
		                }
		            },
		            data:[
		                {name: '北京',value: 111 },
		                {name: '天津',value: 122 },
		                {name: '上海',value: 233 },
		                {name: '重庆',value: 444 },
		                {name: '河北',value: 123 },
		                {name: '河南',value: 223 },
		                {name: '云南',value: randomData() },
		                {name: '辽宁',value: randomData() },
		                {name: '黑龙江',value: randomData() },
		                {name: '山西',value: randomData() },
		                {name: '内蒙古',value: 300 },
		                {name: '陕西',value: randomData() },
		                {name: '吉林',value: randomData() },
		                {name: '福建',value: randomData() },
		                {name: '贵州',value: 555 },
		                {name: '广东',value: 300 },
		                {name: '西藏',value: 200 },
		                {name: '新疆',value: 50 },
		                {name: '青海',value: 300 },
		                {name: '台湾',value: randomData() },
		                {name: '香港',value: randomData() },
		                {name: '澳门',value: randomData() }
		            ]
		        }]
	        },
	        {
            series: [  
                {
		            name: '2015-2016-2学期',
		            type: 'map',
		            mapType: 'china',
		            roam: true,
		            label: {
		                normal: {
		                    show: true
		                },
		                emphasis: {
		                    show: true
		                }
		            },
		            data:[
		                {name: '北京',value: 111 },
		                {name: '天津',value: 122 },
		                {name: '上海',value: 233 },
		                {name: '重庆',value: 444 },
		                {name: '河北',value: 123 },
		                {name: '河南',value: 223 },
		                {name: '云南',value: randomData() },
		                {name: '辽宁',value: randomData() },
		                {name: '黑龙江',value: randomData() },
		                {name: '山西',value: randomData() },
		                {name: '内蒙古',value: 300 },
		                {name: '陕西',value: randomData() },
		                {name: '吉林',value: randomData() },
		                {name: '福建',value: randomData() },
		                {name: '贵州',value: 555 },
		                {name: '广东',value: 300 },
		                {name: '西藏',value: 200 },
		                {name: '新疆',value: 50 },
		                {name: '青海',value: 300 },
		                {name: '台湾',value: randomData() },
		                {name: '香港',value: randomData() },
		                {name: '澳门',value: randomData() }
		            ]
		        }]
	        }
	    ]
	};
	//option8最近一学期成绩统计
	option8 = {
		title: {
	        subtext: '人数'
	    },
	    color: ['#3398DB'],
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis : [
	        {
	            type : 'category',
	            data : ['60分以下', '60-69分', '70-79分', '80-89分', '90-100分'],
	            axisTick: {
	                alignWithLabel: true
	            }
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'人数',
	            type:'bar',
	            barWidth: '75%',
	            data:[10, 52, 200, 334, 390]
	        }
	    ]
	};
//option9各地域学霸学员分布
	option9 = {
    baseOption: {
        timeline: {
            // y: 0,
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: false,
            // currentIndex: 2,
            playInterval: 1000,

            controlStyle: {
                position: 'left'
            },
            data: [
                '2013-2014-1学期','2013-2014-2学期','2014-2015-1学期','2014-2015-2学期','2015-2016-1学期','2015-2016-2学期'
            ],
            label: {

            	interval: 'auto',
                formatter : function(s) {
                    return s;
                }
            }
        },
        title: {
        },
        tooltip: {
        	trigger: 'item'
        },
        visualMap: {
	        min: 0,
	        max: 2500,
	        left: 'left',
	        top: 'bottom',
	        text: ['高','低'],           // 文本，默认为数值文本
	        calculable: true
	    },
        
        series: [

            {name: '学期',type: 'map',mapType: 'china',roam: true,
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            }},
        ]
	    },
	    options: [
	        {
            series: [  
                {
		            name: '2013-2014-1学期',
		            type: 'map',
		            mapType: 'china',
		            roam: true,
		            label: {
		                normal: {
		                    show: true
		                },
		                emphasis: {
		                    show: true
		                }
		            },
		            data:[
		                {name: '北京',value: 111 },
		                {name: '天津',value: 222 },
		                {name: '上海',value: 333 },
		                {name: '重庆',value: 444 },
		                {name: '河北',value: 123 },
		                {name: '河南',value: 223 },
		                {name: '云南',value: randomData() },
		                {name: '辽宁',value: randomData() },
		                {name: '黑龙江',value: randomData() },
		                {name: '山西',value: randomData() },
		                {name: '内蒙古',value: randomData() },
		                {name: '陕西',value: randomData() },
		                {name: '吉林',value: randomData() },
		                {name: '福建',value: randomData() },
		                {name: '贵州',value: 555 },
		                {name: '广东',value: 300 },
		                {name: '西藏',value: 200 },
		                {name: '新疆',value: 50 },
		                {name: '青海',value: 300 },
		                {name: '台湾',value: randomData() },
		                {name: '香港',value: randomData() },
		                {name: '澳门',value: randomData() }
		            ]
		        }]
	        },
	        {
            series: [  
                {
		            name: '2013-2014-2学期',
		            type: 'map',
		            mapType: 'china',
		            roam: true,
		            label: {
		                normal: {
		                    show: true
		                },
		                emphasis: {
		                    show: true
		                }
		            },
		            data:[
		                {name: '北京',value: 111 },
		                {name: '天津',value: 122 },
		                {name: '上海',value: 233 },
		                {name: '重庆',value: 444 },
		                {name: '河北',value: 123 },
		                {name: '河南',value: 223 },
		                {name: '云南',value: randomData() },
		                {name: '辽宁',value: randomData() },
		                {name: '黑龙江',value: randomData() },
		                {name: '山西',value: randomData() },
		                {name: '内蒙古',value: 300 },
		                {name: '陕西',value: randomData() },
		                {name: '吉林',value: randomData() },
		                {name: '福建',value: randomData() },
		                {name: '贵州',value: 555 },
		                {name: '新疆',value: 50 },
		                {name: '台湾',value: randomData() },
		                {name: '香港',value: randomData() },
		                {name: '澳门',value: randomData() }
		            ]
		        }]
	        },
	        {
            series: [  
                {
		            name: '2014-2015-1学期',
		            type: 'map',
		            mapType: 'china',
		            roam: true,
		            label: {
		                normal: {
		                    show: true
		                },
		                emphasis: {
		                    show: true
		                }
		            },
		            data:[
		                {name: '北京',value: 111 },
		                {name: '天津',value: 122 },
		                {name: '上海',value: 233 },
		                {name: '重庆',value: 444 },
		                {name: '河北',value: 123 },
		                {name: '河南',value: 223 },
		                {name: '云南',value: randomData() },
		                {name: '辽宁',value: randomData() },
		                {name: '黑龙江',value: randomData() },
		                {name: '山西',value: randomData() },
		                {name: '内蒙古',value: 300 },
		                {name: '陕西',value: randomData() },
		                {name: '吉林',value: randomData() },
		                {name: '福建',value: randomData() },
		                {name: '贵州',value: 555 },
		                {name: '新疆',value: 50 },
		                {name: '台湾',value: randomData() },
		                {name: '香港',value: randomData() },
		                {name: '澳门',value: randomData() }
		            ]
		        }]
	        },
	        {
            series: [  
                {
		            name: '2014-2015-2学期',
		            type: 'map',
		            mapType: 'china',
		            roam: true,
		            label: {
		                normal: {
		                    show: true
		                },
		                emphasis: {
		                    show: true
		                }
		            },
		            data:[
		                {name: '北京',value: 111 },
		                {name: '天津',value: 122 },
		                {name: '上海',value: 233 },
		                {name: '重庆',value: 444 },
		                {name: '河北',value: 123 },
		                {name: '河南',value: 223 },
		                {name: '云南',value: randomData() },
		                {name: '辽宁',value: randomData() },
		                {name: '黑龙江',value: randomData() },
		                {name: '山西',value: randomData() },
		                {name: '内蒙古',value: 300 },
		                {name: '陕西',value: randomData() },
		                {name: '吉林',value: randomData() },
		                {name: '福建',value: randomData() },
		                {name: '贵州',value: 555 },
		                {name: '新疆',value: 50 },
		                {name: '台湾',value: randomData() },
		                {name: '香港',value: randomData() },
		                {name: '澳门',value: randomData() }
		            ]
		        }]
	        },
	        {
            series: [  
                {
		            name: '2015-2016-1学期',
		            type: 'map',
		            mapType: 'china',
		            roam: true,
		            label: {
		                normal: {
		                    show: true
		                },
		                emphasis: {
		                    show: true
		                }
		            },
		            data:[
		                {name: '北京',value: 111 },
		                {name: '天津',value: 122 },
		                {name: '上海',value: 233 },
		                {name: '重庆',value: 444 },
		                {name: '河北',value: 123 },
		                {name: '河南',value: 223 },
		                {name: '云南',value: randomData() },
		                {name: '辽宁',value: randomData() },
		                {name: '黑龙江',value: randomData() },
		                {name: '山西',value: randomData() },
		                {name: '内蒙古',value: 300 },
		                {name: '陕西',value: randomData() },
		                {name: '吉林',value: randomData() },
		                {name: '福建',value: randomData() },
		                {name: '贵州',value: 555 },
		                {name: '广东',value: 300 },
		                {name: '西藏',value: 200 },
		                {name: '新疆',value: 50 },
		                {name: '青海',value: 300 },
		                {name: '台湾',value: randomData() },
		                {name: '香港',value: randomData() },
		                {name: '澳门',value: randomData() }
		            ]
		        }]
	        },
	        {
            series: [  
                {
		            name: '2015-2016-2学期',
		            type: 'map',
		            mapType: 'china',
		            roam: true,
		            label: {
		                normal: {
		                    show: true
		                },
		                emphasis: {
		                    show: true
		                }
		            },
		            data:[
		                {name: '北京',value: 111 },
		                {name: '天津',value: 122 },
		                {name: '上海',value: 233 },
		                {name: '重庆',value: 444 },
		                {name: '河北',value: 123 },
		                {name: '河南',value: 223 },
		                {name: '云南',value: randomData() },
		                {name: '辽宁',value: randomData() },
		                {name: '黑龙江',value: randomData() },
		                {name: '山西',value: randomData() },
		                {name: '内蒙古',value: 300 },
		                {name: '陕西',value: randomData() },
		                {name: '吉林',value: randomData() },
		                {name: '福建',value: randomData() },
		                {name: '贵州',value: 555 },
		                {name: '广东',value: 300 },
		                {name: '西藏',value: 200 },
		                {name: '新疆',value: 50 },
		                {name: '青海',value: 300 },
		                {name: '台湾',value: randomData() },
		                {name: '香港',value: randomData() },
		                {name: '澳门',value: randomData() }
		            ]
		        }]
	        }
	    ]
	};
        // 使用刚指定的配置项和数据显示图表。
        myChart2.setOption(option2);
        myChart3.setOption(option3);
        myChart4.setOption(option4);
        myChart5.setOption(option5);
        myChart6.setOption(option6);
        myChart7.setOption(option7);
        myChart8.setOption(option8);
        myChart9.setOption(option9);