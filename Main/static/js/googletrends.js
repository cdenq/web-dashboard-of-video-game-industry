//---------------------------------------------------------
//GOOGLE MULTILINE INIT
//---------------------------------------------------------
function graphGoogleLine(gline_data) {
    let googleLineTitle = `${Game} Search Relevancy Over Time`;

    let gMonths = gline_data.map(item => item.Month);
    let gMonthsValues = gline_data.map(item => item.Apex)

    let trace1 = {
        x: ,
        y: gline_data.,
        text: gline_data.months,
        type:'line'
    };
    let googleLineTraceData = [trace1]

    let googleLineLayout = {
        title: googleLineTitle
    };

    Plotly.restyle('googleDiv', 'value')
};

//---------------------------------------------------------
//GOOGLE MULTILINE RESTYLE
//---------------------------------------------------------
function googleLine(data) {
    let googleLineTitle = `${Game} Search Relevancy Over Time`

    data.

    let trace1 = {

    };
    let googleLineTraceData = [trace1]

    let googleLineLayout = {
        title: googleLineTitle
    };

    Plotly.restyle('googleDiv', 'value', [data])
};


//---------------------------------------------------------
//GOOGLE GEOMAP
//---------------------------------------------------------
function graphGoogleGeo(data) {
};