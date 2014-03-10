Discourse.LeaderRequirements = Discourse.Model.extend({
  days_visited_percent: function() {
    return ((this.get('days_visited') * 100) / this.get('time_period'));
  }.property('days_visited', 'time_period'),

  min_days_visited_percent: function() {
    return ((this.get('min_days_visited') * 100) / this.get('time_period'));
  }.property('min_days_visited', 'time_period'),

  met: function() {
    return {
      days_visited: this.get('days_visited') >= this.get('min_days_visited'),
      topics_with_replies: this.get('num_topics_with_replies') >= this.get('min_topics_with_replies'),
      topics_replied_to: this.get('num_topics_replied_to') >= this.get('min_topics_replied_to'),
      flagged_posts: this.get('num_flagged_posts') < this.get('max_flagged_posts')
    };
  }.property(
    'days_visited', 'min_days_visited',
    'num_topics_with_replies', 'min_topics_with_replies',
    'num_topics_replied_to', 'min_topics_replied_to',
    'num_flagged_posts', 'max_flagged_posts'
  )
});
