import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export default (dom, data)=>{
    /* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

am4core.options.autoSetClassName = true;

// Create chart instance
let chart = am4core.create(dom, am4charts.XYChart);

chart.colors.step = 2;
chart.maskBullets = false;

// Add data
chart.data = [{
    "date": "2012-01-01",
    "distance": 227,
    "townName": "New York",
    "townName2": "New York",
    "townSize": 12,
    "latitude": 40.71,
    "duration": 408
}, {
    "date": "2012-01-02",
    "distance": 371,
    "townName": "Washington",
    "townSize": 7,
    "latitude": 38.89,
    "duration": 482
}, {
    "date": "2012-01-03",
    "distance": 433,
    "townName": "Wilmington",
    "townSize": 3,
    "latitude": 34.22,
    "duration": 562
}, {
    "date": "2012-01-04",
    "distance": 345,
    "townName": "Jacksonville",
    "townSize": 3.5,
    "latitude": 30.35,
    "duration": 379
}, {
    "date": "2012-01-05",
    "distance": 480,
    "townName": "Miami",
    "townName2": "Miami",
    "townSize": 5,
    "latitude": 25.83,
    "duration": 501
}, {
    "date": "2012-01-06",
    "distance": 386,
    "townName": "Tallahassee",
    "townSize": 3.5,
    "latitude": 30.46,
    "duration": 443
}, {
    "date": "2012-01-07",
    "distance": 348,
    "townName": "New Orleans",
    "townSize": 5,
    "latitude": 29.94,
    "duration": 405
}, {
    "date": "2012-01-08",
    "distance": 238,
    "townName": "Houston",
    "townName2": "Houston",
    "townSize": 8,
    "latitude": 29.76,
    "duration": 309
}];

// Create axes
let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.dataFields.category = "category";
dateAxis.renderer.grid.template.location = 0;
dateAxis.renderer.minGridDistance = 50;
dateAxis.renderer.grid.template.disabled = true;
dateAxis.renderer.fullWidthTooltip = true;

let distanceAxis = chart.yAxes.push(new am4charts.ValueAxis());
distanceAxis.title.text = "Distance";
distanceAxis.renderer.grid.template.disabled = true;

let durationAxis = chart.yAxes.push(new am4charts.DurationAxis());
durationAxis.title.text = "Duration";
durationAxis.baseUnit = "minute";
durationAxis.renderer.grid.template.disabled = true;
durationAxis.renderer.opposite = true;

durationAxis.durationFormatter.durationFormat = "hh'h' mm'min'";

let latitudeAxis = chart.yAxes.push(new am4charts.ValueAxis());
latitudeAxis.renderer.grid.template.disabled = true;
latitudeAxis.renderer.labels.template.disabled = true;

// Create series
let distanceSeries = chart.series.push(new am4charts.ColumnSeries());
distanceSeries.id = "g1";
distanceSeries.dataFields.valueY = "distance";
distanceSeries.dataFields.dateX = "date";
distanceSeries.yAxis = distanceAxis;
distanceSeries.tooltipText = "{valueY} miles";
distanceSeries.name = "Distance";
distanceSeries.columns.template.fillOpacity = 0.7;

let disatnceState = distanceSeries.columns.template.states.create("hover");
disatnceState.properties.fillOpacity = 0.9;

let durationSeries = chart.series.push(new am4charts.LineSeries());
durationSeries.id = "g3";
durationSeries.dataFields.valueY = "duration";
durationSeries.dataFields.dateX = "date";
durationSeries.yAxis = durationAxis;
durationSeries.name = "Duration";
durationSeries.strokeWidth = 2;
durationSeries.tooltipText = "{valueY.formatDuration()}";

let durationBullet = durationSeries.bullets.push(new am4charts.Bullet());
let durationRectangle = durationBullet.createChild(am4core.Rectangle);
durationBullet.horizontalCenter = "middle";
durationBullet.verticalCenter = "middle";
durationBullet.width = 7;
durationBullet.height = 7;
durationRectangle.width = 7;
durationRectangle.height = 7;

let durationState = durationBullet.states.create("hover");
durationState.properties.scale = 1.2;

let latitudeSeries = chart.series.push(new am4charts.LineSeries());
latitudeSeries.id = "g2";
latitudeSeries.dataFields.valueY = "latitude";
latitudeSeries.dataFields.dateX = "date";
latitudeSeries.yAxis = latitudeAxis;
latitudeSeries.name = "Duration";
latitudeSeries.strokeWidth = 2;
latitudeSeries.tooltipText = "Latitude: {valueY} ({townName})";

let latitudeBullet = latitudeSeries.bullets.push(new am4charts.CircleBullet());
latitudeBullet.circle.fill = am4core.color("#fff");
latitudeBullet.circle.strokeWidth = 2;
latitudeBullet.circle.propertyFields.radius = "townSize";

let latitudeState = latitudeBullet.states.create("hover");
latitudeState.properties.scale = 1.2;

let latitudeLabel = latitudeSeries.bullets.push(new am4charts.LabelBullet());
latitudeLabel.label.text = "{townName2}";
latitudeLabel.label.horizontalCenter = "left";
latitudeLabel.label.dx = 14;

// Add legend
chart.legend = new am4charts.Legend();

// Add cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.fullWidthLineX = true;
chart.cursor.xAxis = dateAxis;
chart.cursor.lineX.strokeOpacity = 0;
chart.cursor.lineX.fill = am4core.color("#000");
chart.cursor.lineX.fillOpacity = 0.1;

}