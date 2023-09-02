"use client";
import { useEffect } from "react";
import Highcharts from "highcharts";
import Flex from "@/components/molecules/flex/flex";
import Container from "@/components/molecules/container/container";
import { Col, Row } from "antd";
import NuclearChart from "@/components/pages/dashboard/nuclearChart";

export default function Dashboard() {
  useEffect(() => {


    Highcharts.chart('chart-3', {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Monthly Average Temperature'
      },
      subtitle: {
        text: 'Source: ' +
          '<a href="https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature" ' +
          'target="_blank">Wikipedia.com</a>'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        accessibility: {
          description: 'Months of the year'
        }
      },
      yAxis: {
        title: {
          text: 'Temperature'
        },
        labels: {
          format: '{value}°'
        }
      },
      tooltip: {
        crosshairs: true,
        shared: true
      },
      plotOptions: {
        spline: {
          marker: {
            radius: 4,
            lineColor: '#666666',
            lineWidth: 1
          }
        }
      },
      series: [{
        name: 'Tokyo',
        marker: {
          symbol: 'square'
        },
        data: [5.2, 5.7, 8.7, 13.9, 18.2, 21.4, 25.0, {
          y: 26.4,
          marker: {
            symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
          },
          accessibility: {
            description: 'Sunny symbol, this is the warmest point in the chart.'
          }
        }, 22.8, 17.5, 12.1, 7.6]

      }, {
        name: 'Bergen',
        marker: {
          symbol: 'diamond'
        },
        data: [{
          y: 1.5,
          marker: {
            symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)'
          },
          accessibility: {
            description: 'Snowy symbol, this is the coldest point in the chart.'
          }
        }, 1.6, 3.3, 5.9, 10.5, 13.5, 14.5, 14.4, 11.5, 8.7, 4.7, 2.6]
      }]
    });

    (async () => {
      const data = await fetch(
        "https://cdn.jsdelivr.net/gh/highcharts/highcharts@v10.3.3/samples/data/usdeur.json"
      ).then((response) => response.json());

      Highcharts.chart("chart-2", {
        chart: {
          zoomType: "x",
        },
        title: {
          text: "USD to EUR exchange rate over time",
          align: "left",
        },
        subtitle: {
          text:
            document.ontouchstart === undefined
              ? "Click and drag in the plot area to zoom in"
              : "Pinch the chart to zoom in",
          align: "left",
        },
        xAxis: {
          type: "datetime",
        },
        yAxis: {
          title: {
            text: "Exchange rate",
          },
        },
        legend: {
          enabled: false,
        },
        plotOptions: {
          area: {
            fillColor: {
              linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1,
              },
              stops: [
                [0, Highcharts.getOptions().colors[0]],
                [
                  1,
                  Highcharts.color(Highcharts.getOptions().colors[0])
                    .setOpacity(0)
                    .get("rgba"),
                ],
              ],
            },
            marker: {
              radius: 2,
            },
            lineWidth: 1,
            states: {
              hover: {
                lineWidth: 1,
              },
            },
            threshold: null,
          },
        },

        series: [
          {
            type: "area",
            name: "USD to EUR",
            data: data,
          },
        ],
      });
    })();
  }, []);

  return (
    <div>
      <Container>
        <Row gutter={36}>
          <Col lg={12} md={24} xs={24}>
            <NuclearChart />
          </Col>
          <Col lg={12} md={24} xs={24}>
            <div className="chart-wrapper">
              <div id="chart-2"></div>
            </div>
          </Col>
          <Col lg={24} md={24} xs={24}>
            <div className="chart-wrapper">
              <div id="chart-3"></div>
            </div>
          </Col>
        </Row>
      </Container>
      <Flex justifyContent={"space-between"}></Flex>
    </div>
  );
}
