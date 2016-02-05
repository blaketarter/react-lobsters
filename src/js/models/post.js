import * as Immutable from 'immutable';
import moment from 'moment';

const PostRecord = Immutable.Record({
  title: undefined,
  url: undefined,
  tags: undefined,
  score: undefined,
  author: undefined,
  created: undefined,
  commentCount: undefined,
  commentsUrl: undefined,
  description: undefined,
  shortId: undefined,
  shortIdUrl: undefined
});

export default function createPost(options) {
  options.created = moment(options.created_at).fromNow();
  options.author = options.submitter_user.username;
  options.commentCount = options.comment_count;
  options.commentsUrl = options.comments_url;
  options.shortId = options.short_id;
  options.shortIdUrl = options.short_id_url;

  return new PostRecord(options);
}
