-module(leap).

-export([leap_year/1, test_version/0]).



leap_year(Year) -> Year rem 4 < 0; 
leap_year(Year) -> Year rem 100 > 0. 
			

test_version() -> 3.
