import { Box } from '@mui/material';
import { ResponsiveLine } from '@nivo/line'
import { useTheme } from "@mui/material";


const data = [
    {
      "id": "japan",
      "color": "hsl(282, 70%, 50%)",
      "data": [
        {
          "x": "helicopter",
          "y": 94
        },
        {
          "x": "boat",
          "y": 201
        },
        {
          "x": "train",
          "y": 222
        },
        {
          "x": "subway",
          "y": 163
        },
        {
          "x": "bus",
          "y": 138
        },
        {
          "x": "car",
          "y": 87
        },
        {
          "x": "moto",
          "y": 262
        },
        {
          "x": "bicycle",
          "y": 159
        },
        {
          "x": "horse",
          "y": 105
        },
        {
          "x": "skateboard",
          "y": 151
        },
        {
          "x": "others",
          "y": 269
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(284, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 10
        },
        {
          "x": "helicopter",
          "y": 253
        },
        {
          "x": "boat",
          "y": 170
        },
        {
          "x": "train",
          "y": 42
        },
        {
          "x": "subway",
          "y": 268
        },
        {
          "x": "bus",
          "y": 282
        },
        {
          "x": "car",
          "y": 2
        },
        {
          "x": "moto",
          "y": 24
        },
        {
          "x": "bicycle",
          "y": 292
        },
        {
          "x": "horse",
          "y": 292
        },
        {
          "x": "skateboard",
          "y": 162
        },
        {
          "x": "others",
          "y": 35
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(344, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 14
        },
        {
          "x": "helicopter",
          "y": 266
        },
        {
          "x": "boat",
          "y": 148
        },
        {
          "x": "train",
          "y": 191
        },
        {
          "x": "subway",
          "y": 93
        },
        {
          "x": "bus",
          "y": 208
        },
        {
          "x": "car",
          "y": 76
        },
        {
          "x": "moto",
          "y": 155
        },
        {
          "x": "bicycle",
          "y": 11
        },
        {
          "x": "horse",
          "y": 217
        },
        {
          "x": "skateboard",
          "y": 124
        },
        {
          "x": "others",
          "y": 31
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(297, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 222
        },
        {
          "x": "helicopter",
          "y": 176
        },
        {
          "x": "boat",
          "y": 51
        },
        {
          "x": "train",
          "y": 276
        },
        {
          "x": "subway",
          "y": 226
        },
        {
          "x": "bus",
          "y": 149
        },
        {
          "x": "car",
          "y": 54
        },
        {
          "x": "moto",
          "y": 87
        },
        {
          "x": "bicycle",
          "y": 114
        },
        {
          "x": "horse",
          "y": 129
        },
        {
          "x": "skateboard",
          "y": 33
        },
        {
          "x": "others",
          "y": 236
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(279, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 5
        },
        {
          "x": "helicopter",
          "y": 254
        },
        {
          "x": "boat",
          "y": 70
        },
        {
          "x": "train",
          "y": 148
        },
        {
          "x": "subway",
          "y": 56
        },
        {
          "x": "bus",
          "y": 254
        },
        {
          "x": "car",
          "y": 297
        },
        {
          "x": "moto",
          "y": 206
        },
        {
          "x": "bicycle",
          "y": 24
        },
        {
          "x": "horse",
          "y": 55
        },
        {
          "x": "skateboard",
          "y": 162
        },
        {
          "x": "others",
          "y": 114
        }
      ]
    }
  ]
// eslint-disable-next-line react/prop-types
const LineChart = ({isDashboard = false}) => {
    const theme = useTheme()
  return (
    <Box sx={{height : isDashboard? "288px" : "75vh"}}>
            <ResponsiveLine
            data={data}
            curve="catmullRom"
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: isDashboard? null : 'transportation',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend:isDashboard? null : 'count',
                legendOffset: -45,
                legendPosition: 'middle'
            }}
            pointSize={10}
            theme={{
                // @ts-ignore
                textColor: 'red',
                "text": {
                    "fontSize": 11,
                    "fill": theme.palette.text.primary,
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                },
                "axis": {
                    "domain": {
                        "line": {
                            "stroke": theme.palette.divider,
                            "strokeWidth": 1
                        }
                    },
                    "legend": {
                        "text": {
                            "fontSize": 12,
                            "fill": "",
                            "outlineWidth": 0,
                            "outlineColor": "transparent"
                        }
                    },
                    "ticks": {
                        "line": {
                            "stroke": theme.palette.divider,
                            "strokeWidth": 1
                        },
                        "text": {
                            "fontSize": 11,
                            "fill": theme.palette.text.secondary,
                            "outlineWidth": 0,
                            "outlineColor": "transparent"
                        }
                    }
                },
                "grid": {
                    "line": {
                        "stroke": theme.palette.divider,
                        "strokeWidth": 1
                    }
                },
                "legends": {
                    "title": {
                        "text": {
                            "fontSize": 11,
                            "fill": theme.palette.text.primary,
                            "outlineWidth": 0,
                            "outlineColor": "transparent"
                        }
                    },
                    "text": {
                        "fontSize": 11,
                        "fill": theme.palette.text.primary,
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    },
                    "ticks": {
                        "line": {},
                        "text": {
                            "fontSize": 10,
                            "fill": theme.palette.text.primary,
                            "outlineWidth": 0,
                            "outlineColor": "transparent"
                        }
                    }
                },
                "annotations": {
                    "text": {
                        "fontSize": 13,
                        "fill": theme.palette.text.primary,
                        "outlineWidth": 2,
                        "outlineColor": "#ffffff",
                        "outlineOpacity": 1
                    },
                    "link": {
                        "stroke": "#000000",
                        "strokeWidth": 1,
                        "outlineWidth": 2,
                        "outlineColor": "#ffffff",
                        "outlineOpacity": 1
                    },
                    "outline": {
                        "stroke": "#000000",
                        "strokeWidth": 2,
                        "outlineWidth": 2,
                        "outlineColor": "#ffffff",
                        "outlineOpacity": 1
                    },
                    "symbol": {
                        "fill": "#000000",
                        "outlineWidth": 2,
                        "outlineColor": "#ffffff",
                        "outlineOpacity": 1
                    }
                },
                "tooltip": {
                    "container": {
                        "background": theme.palette.text.primary,
                        "fontSize": 12
                    },
                    "basic": {},
                    "chip": {},
                    "table": {},
                    "tableCell": {},
                    "tableCellValue": {}
                }
            }}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
        </Box>
  )
}

export default LineChart
