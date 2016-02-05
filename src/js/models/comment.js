import * as Immutable from 'immutable';
import moment from 'moment';

const CommentRecord = Immutable.Record({
  indentLevel: undefined,
  score: undefined,
  author: undefined,
  created: undefined,
  comment: undefined,
  collapsed: undefined,
  commentCollapsed: undefined
});

export default function createComment(options) {
  options.created = moment(options.created_at).fromNow();
  options.collapsed = false;
  options.commentCollapsed = false;

  return new CommentRecord(options);
}
