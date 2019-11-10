#!/usr/bin/env perl
use strict;
use warnings;
use feature qw(say signatures);

use Test::Spec::Acceptance;
use Data::Compare;
use Data::Dumper;

sub XXX($x) {
   # ...
}

describe 'When ...' => sub {
  it '... ' => sub {
    is(1, 1);
  };
};

Feature '...' => sub {
  Scenario '...' => sub {
    Given 'a ... ' => sub { 
    };
    When '...' => sub {
    };
    Then '...' => sub {
      is(1,1);
    };
  };
};

runtests unless caller;

sub contains {
  my ($element, $collection) = @_;
  say Dumper($collection);
  my @result = grep {
    Compare($_, $element)
  } @$collection;

  return scalar @result != 0;
}

