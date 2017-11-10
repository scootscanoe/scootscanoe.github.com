---
layout: page
title: Scoot's Canoe Academy of Anime Rating
subtitle: Awarders of the Anime Academy Award
---

Scoot's Canoe Academy of Anime Rating
=====================================

The Scoot's Canoe Academy of Anime Rating (SCAAR) is a highly esteemed body of anime critics responsible for awarding the prestigious Anime Academy Award.

Anime hype chart
----------------

<svg width="960" height="700"></svg>

<script src="https://d3js.org/d3.v4.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3-legend/2.24.0/d3-legend.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3-tip/0.8.0-alpha.1/d3-tip.min.js"></script>
<link rel="stylesheet" href="https://rawgithub.com/Caged/d3-tip/master/examples/example-styles.css">
<script>
var titles = ['Yuri!!! on Ice', 'Gi(a)rlish Number', 'Haikyuu!!: Karasuno Koukou VS Shiratorizawa Gakuen Koukou', 'Shelter', 'Fate/Grand Order: First Order', 'Masamune-kun no Revenge', 'Kizumonogatari III: Reiketsu-hen', 'Little Witch Academia (TV)', 'Kono Subarashii Sekai ni Shukufuku wo! 2', 'Kobayashi-san Chi no Maid Dragon', 'Kuzu no Honkai', 'Sword Art Online Movie: Ordinal Scale', 'Boku no Hero Academia 2nd Season', 'Shingeki no Kyojin Season 2', 'Rokudenashi Majutsu Koushi to Akashic Records', 'Tsuki ga Kirei', 'Berserk 2nd Season', 'Eromanga-sensei', 'Zero kara Hajimeru Mahou no Sho', 'Saenai Heroine no Sodatekata \xe2\x99\xad', 'Shokugeki no Souma: Ni no Sara OVA', 'Kakegurui', 'Fate/Apocrypha', 'Aho Girl', 'Made in Abyss', 'Ballroom e Youkoso', 'Princess Principal', 'Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e (TV)', 'Gamers!', 'Owarimonogatari 2nd Season'];
var seasons = ['Fall 2016', 'Fall 2016', 'Fall 2016', 'Fall 2016', 'Fall 2016', 'Winter 2017', 'Winter 2017', 'Winter 2017', 'Winter 2017', 'Winter 2017', 'Winter 2017', 'Winter 2017', 'Spring 2017', 'Spring 2017', 'Spring 2017', 'Spring 2017', 'Spring 2017', 'Spring 2017', 'Spring 2017', 'Spring 2017', 'Spring 2017', 'Summer 2017', 'Summer 2017', 'Summer 2017', 'Summer 2017', 'Summer 2017', 'Summer 2017', 'Summer 2017', 'Summer 2017', 'Summer 2017'];
var ids = [32995, 32607, 32935, 34240, 34321, 33487, 31758, 33489, 32937, 33206, 32949, 31765, 33486, 25777, 32951, 34822, 34055, 32901, 34176, 30727, 34480, 34933, 34662, 34881, 34599, 34636, 35240, 35507, 34280, 35247];
var users = ['thelolpatrol', 'gilgi', 'POOPOO88', 'AzNsAnTaGiN', 'lingybear'];
var data = [{'id': 32995, 'watched': 7.0, 'score': 8.0, 'user': 'thelolpatrol', 'title': 'Yuri!!! on Ice'}, {'id': 32995, 'watched': 7.0, 'score': 8.0, 'user': 'gilgi', 'title': 'Yuri!!! on Ice'}, {'id': 32995, 'watched': 7.0, 'score': 8.0, 'user': 'POOPOO88', 'title': 'Yuri!!! on Ice'}, {'id': 32607, 'watched': 7.0, 'score': 8.0, 'user': 'AzNsAnTaGiN', 'title': 'Gi(a)rlish Number'}, {'id': 32935, 'watched': 7.0, 'score': 9.0, 'user': 'POOPOO88', 'title': 'Haikyuu!!: Karasuno Koukou VS Shiratorizawa Gakuen Koukou'}, {'id': 32935, 'watched': 7.0, 'score': 7.0, 'user': 'lingybear', 'title': 'Haikyuu!!: Karasuno Koukou VS Shiratorizawa Gakuen Koukou'}, {'id': 34240, 'watched': 7.0, 'score': 7.0, 'user': 'POOPOO88', 'title': 'Shelter'}, {'id': 34240, 'watched': 7.0, 'score': 7.0, 'user': 'AzNsAnTaGiN', 'title': 'Shelter'}, {'id': 34321, 'watched': 7.0, 'score': 6.0, 'user': 'POOPOO88', 'title': 'Fate/Grand Order: First Order'}, {'id': 34321, 'watched': 7.0, 'score': 6.0, 'user': 'AzNsAnTaGiN', 'title': 'Fate/Grand Order: First Order'}, {'id': 33487, 'watched': 7.0, 'score': 6.0, 'user': 'POOPOO88', 'title': 'Masamune-kun no Revenge'}, {'id': 31758, 'watched': 7.0, 'score': 9.0, 'user': 'POOPOO88', 'title': 'Kizumonogatari III: Reiketsu-hen'}, {'id': 31758, 'watched': 7.0, 'score': 9.0, 'user': 'AzNsAnTaGiN', 'title': 'Kizumonogatari III: Reiketsu-hen'}, {'id': 33489, 'watched': 2.2400000000000002, 'score': 7.0, 'user': 'gilgi', 'title': 'Little Witch Academia (TV)'}, {'id': 33489, 'watched': 7.0, 'score': 9.0, 'user': 'AzNsAnTaGiN', 'title': 'Little Witch Academia (TV)'}, {'id': 33489, 'watched': 3.6400000000000001, 'score': 6.0, 'user': 'lingybear', 'title': 'Little Witch Academia (TV)'}, {'id': 32937, 'watched': 7.0, 'score': 8.0, 'user': 'POOPOO88', 'title': 'Kono Subarashii Sekai ni Shukufuku wo! 2'}, {'id': 33206, 'watched': 7.0, 'score': 9.0, 'user': 'thelolpatrol', 'title': 'Kobayashi-san Chi no Maid Dragon'}, {'id': 33206, 'watched': 1.6153846153846154, 'score': 7.0, 'user': 'gilgi', 'title': 'Kobayashi-san Chi no Maid Dragon'}, {'id': 33206, 'watched': 1.0769230769230769, 'score': 7.0, 'user': 'lingybear', 'title': 'Kobayashi-san Chi no Maid Dragon'}, {'id': 32949, 'watched': 7.0, 'score': 7.0, 'user': 'POOPOO88', 'title': 'Kuzu no Honkai'}, {'id': 32949, 'watched': 7.0, 'score': 9.0, 'user': 'AzNsAnTaGiN', 'title': 'Kuzu no Honkai'}, {'id': 31765, 'watched': 7.0, 'score': 5.0, 'user': 'POOPOO88', 'title': 'Sword Art Online Movie: Ordinal Scale'}, {'id': 33486, 'watched': 7.0, 'score': 9.0, 'user': 'POOPOO88', 'title': 'Boku no Hero Academia 2nd Season'}, {'id': 25777, 'watched': 7.0, 'score': 7.0, 'user': 'gilgi', 'title': 'Shingeki no Kyojin Season 2'}, {'id': 25777, 'watched': 7.0, 'score': 9.0, 'user': 'POOPOO88', 'title': 'Shingeki no Kyojin Season 2'}, {'id': 25777, 'watched': 7.0, 'score': 7.0, 'user': 'lingybear', 'title': 'Shingeki no Kyojin Season 2'}, {'id': 32951, 'watched': 7.0, 'score': 5.0, 'user': 'POOPOO88', 'title': 'Rokudenashi Majutsu Koushi to Akashic Records'}, {'id': 34822, 'watched': 1.75, 'score': 6.0, 'user': 'gilgi', 'title': 'Tsuki ga Kirei'}, {'id': 34822, 'watched': 7.0, 'score': 10.0, 'user': 'POOPOO88', 'title': 'Tsuki ga Kirei'}, {'id': 34822, 'watched': 7.0, 'score': 8.0, 'user': 'lingybear', 'title': 'Tsuki ga Kirei'}, {'id': 34055, 'watched': 7.0, 'score': 9.0, 'user': 'thelolpatrol', 'title': 'Berserk 2nd Season'}, {'id': 32901, 'watched': 5.833333333333333, 'score': 7.0, 'user': 'AzNsAnTaGiN', 'title': 'Eromanga-sensei'}, {'id': 34176, 'watched': 7.0, 'score': 7.0, 'user': 'AzNsAnTaGiN', 'title': 'Zero kara Hajimeru Mahou no Sho'}, {'id': 30727, 'watched': 7.0, 'score': 7.0, 'user': 'POOPOO88', 'title': 'Saenai Heroine no Sodatekata \xe2\x99\xad'}, {'id': 34480, 'watched': 7.0, 'score': 8.0, 'user': 'lingybear', 'title': 'Shokugeki no Souma: Ni no Sara OVA'}, {'id': 34933, 'watched': 7.0, 'score': 6.0, 'user': 'POOPOO88', 'title': 'Kakegurui'}, {'id': 34662, 'watched': 4.2000000000000002, 'score': 7.0, 'user': 'gilgi', 'title': 'Fate/Apocrypha'}, {'id': 34662, 'watched': 4.2000000000000002, 'score': 7.0, 'user': 'AzNsAnTaGiN', 'title': 'Fate/Apocrypha'}, {'id': 34881, 'watched': 7.0, 'score': 5.0, 'user': 'POOPOO88', 'title': 'Aho Girl'}, {'id': 34599, 'watched': 7.0, 'score': 9.0, 'user': 'thelolpatrol', 'title': 'Made in Abyss'}, {'id': 34599, 'watched': 7.0, 'score': 9.0, 'user': 'POOPOO88', 'title': 'Made in Abyss'}, {'id': 34636, 'watched': 2.9166666666666665, 'score': 7.0, 'user': 'gilgi', 'title': 'Ballroom e Youkoso'}, {'id': 34636, 'watched': 2.0416666666666665, 'score': 7.0, 'user': 'lingybear', 'title': 'Ballroom e Youkoso'}, {'id': 35240, 'watched': 7.0, 'score': 7.0, 'user': 'AzNsAnTaGiN', 'title': 'Princess Principal'}, {'id': 35507, 'watched': 4.666666666666667, 'score': 5.0, 'user': 'gilgi', 'title': 'Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e (TV)'}, {'id': 35507, 'watched': 7.0, 'score': 6.0, 'user': 'POOPOO88', 'title': 'Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e (TV)'}, {'id': 35507, 'watched': 4.083333333333333, 'score': 7.0, 'user': 'lingybear', 'title': 'Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e (TV)'}, {'id': 34280, 'watched': 3.5, 'score': 6.0, 'user': 'lingybear', 'title': 'Gamers!'}, {'id': 35247, 'watched': 7.0, 'score': 9.0, 'user': 'POOPOO88', 'title': 'Owarimonogatari 2nd Season'}, {'id': 35247, 'watched': 7.0, 'score': 9.0, 'user': 'AzNsAnTaGiN', 'title': 'Owarimonogatari 2nd Season'}];

var season_colors = {
  'Fall 2016': 'red',
  'Winter 2017': 'blue',
  'Spring 2017': 'green',
  'Summer 2017': 'orange'
};

var svg = d3.select("svg"),
    margin = {top: 70, right: 20, bottom: 170, left: 170},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

var x = d3.scalePoint().rangeRound([0, width]).padding(0.5).domain(titles),
    y = d3.scaleLinear().rangeRound([height, 0]).domain([0, 10]),
    c = d3.scaleOrdinal(d3.schemeCategory10).domain(users);

data.forEach(function(d) {
    d['x'] = x(d.title);
    d['y'] = y(d.score);
});

var tip = d3.tip()
    .attr("class", "d3-tip")
    .attr("background", "white")
    .html(function(d) {
        return "<p>" + d.title + "</p><p>Rated " + d.score + "/10 by "+ d.user + "</p>";
    });
    svg.call(tip);

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

g.append("g")
    .attr("class", "axis axis-x")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
  .selectAll("text")	
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", ".15em")
    .attr("transform", "rotate(-45)")
    .attr("fill", function(d, i) { return season_colors[seasons[i]] })
    .on('dblclick', function(d, i) { return window.open('https://myanimelist.net/anime/' + ids[i], '_blank'); });

g.append("g")
    .attr("class", "axis axis-y")
    .call(d3.axisLeft(y).ticks(10));

function make_x_gridlines() {		
    return d3.axisBottom(x)
        .ticks()
}

function make_y_gridlines() {		
    return d3.axisLeft(y)
        .ticks()
}

g.append("g")			
    .attr("class", "grid")
    .attr("transform", "translate(0," + height + ")")
    .attr("stroke-opacity", 0.2)
    .call(make_x_gridlines()
        .tickSize(-height)
        .tickFormat("")
    )

dots = g.selectAll(".dot")
  .data(data)
  .enter().append("circle")
    .attr("class", "dot")
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("r", function(d) { return d.watched })
    .attr("fill", function(d) {return c(d.user) })
    .attr("stroke", "black")
    .on('dblclick', function(d) { return window.open('https://myanimelist.net/anime/' + d.id, '_blank'); })
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide);

var simulation = d3.forceSimulation(data)
    .velocityDecay(0.9)
    .force("collide", d3.forceCollide().radius(function(d) { return d.watched; }).iterations(2))
    .on("tick", function() { dots.attr("cx", function(d) { return d.x; }).attr("cy", function(d) { return d.y; }) });

// set up legend
// step 1: create a group for all legend-related elements
var legendGroup = svg.append("g")
    .attr("class", "legendOrdinal")
    .attr("transform", "translate(20,20)");
// step 2: first thing (lowest in z-order) to add is a rectangle to outline the legend with
// we will fill in its size later
var legendBox = legendGroup.append("rect")
    .attr("class", "legend-box")
    .attr("fill", "white")
    .attr("stroke", "black");
// step 3: invoke d3-legend to create the legend
var legendOrdinal = d3.legendColor()
    .shape("path", d3.symbol().type(d3.symbolCircle).size(150)())
    .shapePadding(10)
    .scale(c);
var legend = svg.select(".legendOrdinal")
    .call(legendOrdinal);
// step 4: select the legend cells - we will do something with them
var legendCells = legendGroup.selectAll('.cell');
// step 4b: figure out what size to make the legendBox by iterating over the legendCells
var maxWidth = 0;
var totalHeight = 0;
legendCells.each(function(d) {
    var bbox = d3.select(this).node().getBBox();
    maxWidth = bbox.width > maxWidth ? bbox.width : maxWidth;
    totalHeight += bbox.height + 10;
});
legendBox.attr("width", maxWidth + 15)
    .attr("height", totalHeight)
    .attr("transform", "translate(-15,-15)");
</script>

Requirements
------------

### Membership

Membership in the academy is extended to all SC members. Additionally, all members who satisfy the requirements for nomination may also invite one additional member from outside SC.

### Nomination

Members who watch at least three anime shows across the year are entitled to nominate one show they have watched.

### Voting

Members who have watched at least three episodes of each nominated anime (except for sequels, see below) by the voting deadline are entitled to cast one vote for one nominated anime of their choice (except for an anime which they nominated).

2017 Timeline
-------------

  - Nov 1: nomination day
  - Nov 12: nomination extension deadline
  - Dec 25: voting opens
  - Dec 31: voting closes
  - Jan 1: results announced

Procedures and details
----------------------

### Anime year

The 2017 anime year runs from Fall 2016 to Summer 2017, inclusive.

This includes the following seasons:

  - [Fall 2016](https://myanimelist.net/anime/season/2016/fall)
  - [Winter 2017](https://myanimelist.net/anime/season/2017/winter)
  - [Spring 2017](https://myanimelist.net/anime/season/2017/winter)
  - [Summer 2017](https://myanimelist.net/anime/season/2017/summer)

### Nomination procedures

All members who qualify to nominate an anime by the nomination day (Nov 1) will be ordered by random draw. They will each in turn nominate one anime that has not been nominated yet.

In 2017 we are introducing a special exemption policy, which will allow members who have not yet qualified to nominate an anime by the nomination day (Nov 1) will have until the nomination extension deadline (Nov 12) to finish qualifying and produce a nomination.

### What can be nominated?

Any anime which aired during the seasons in the anime year may be nominated. Refer to the MAL seasonal lists linked above for a comprehensive list.

OVAs, ONAs, movies, and other specials cannot be nominated.

Sequels to another anime may be nominated; however, voters will not be compelled to watch a sequel anime if it spoils any other shows.
