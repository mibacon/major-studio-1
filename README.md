# mibacon.github.io

Which neigborhoods produces the most garbage? what are their demographics? what are the ramifications (e.g. higher temperatures, higher carbon emissions, more garbage pick up days?, etc.) and what are some conclusions to draw (less garbage pick ups? stronger recycling regulations? improve poverty levels? etc.) Can alternatives for waste management work with projections for population growth and shifts in demographics?

Data Sources:
1) https://data.cityofnewyork.us/City-Government/DSNY-Monthly-Tonnage-Data/ebb7-mvp5
	2014-2016 Monthly Tonnage by NYC District - waste, paper, glass/metal
2) https://data.cityofnewyork.us/City-Government/Demographics-and-profiles-at-the-Public-Use-Microd/7q5y-m6mr
	2010-12 Demographic, Social, Economic, and Housing Profiles by Community District/PUMA
3) https://data.cityofnewyork.us/City-Government/Census-Demographics-at-the-NYC-Community-District-/5unr-w4sc
	2010 Census Data by District
4) https://www1.nyc.gov/site/planning/community/community-portal.page
	Map of NYC 56 Districts

CONSTRAINTS:
1) Data only available (that I can see) at district level - is there a way to get smaller units from Department of Sanitation?
2) Tonnage data (#1) starts in 2014; Census Data is from 2010; PUMA data from 2010-2012.
3) PUMA data combines some districts (e.g. BX1,2)

Interesting Trends From Data:
1) Februray is consistently lowest month for garbage production - huge dip - why??
2) From 2014-2016 overall slight increase in garbage production and recycling - so we're getting slightly better at recycling, but also generating more garbage...
3) Income is positively correlated to both garbage and recycling - so districts with people who make more money are more likely to recycle, but also generate more garbage. (Other collinear indicators, like districts with high rents, or low unemployment or % of families with income below poverty line have similar correlations.)
4) Education seems to impact recycling but not garbage production - districts with high percentage of college graduates + have higher recycling production, but not necessarily higher or lower garbage production.

Question: Which district generates the most garbage?
Answer:
1 - Queens12
2 - Queens7
3 - Brooklyn12
4 - Staten Island3
5 - Brooklyn18
6 - Queens13
7 - Manhattan8
8 - Brooklyn1
9 - Staten Island1
10 - Manhattan7

Question: Which district generates the most garbage PER PERSON?
Answer:
1 - Staten Island3
2 - Brooklyn12
3 - Staten Island2
4 - Brooklyn9
5 - Brooklyn14
6 - Brooklyn1
7 - Queens12
8 - Staten Island1
9 - Queens3
10 - Queens10

Question: Which districts have the highest median income?
Answer: Duh, manhattan - but look, Staten Island 3 is on this list!
1- M8 
2- M1,2 
3- M7 
4- M4,5 
5 - M6 
6 - B6 
7 - B2 
8 - S3 
9 - Q13 
10 - Q11 

Question: Which districts have the highest % of college graduates?
Answer: Duh, mahattant
1 - M1,2 
2 - M6 
3 - M8 
4 - M7 
5 - M4,5 
6 - B6 
7 - B2 
8 - Q6 
9 - Q11 
10 - M9 

Question: Which districts have the highest median age?
Answer:
1 - B13 
2 - Q11 
3 - BX10 
4 - Q7 
5 - S2 
6 - B15 
7 - M7 
8 - Q6 
9 - S3 
10 - M8 