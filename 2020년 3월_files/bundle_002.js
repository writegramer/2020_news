(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"8Lfv":function(e,t,n){"use strict";n("yKDW"),n("dtAy");var r=n("MDbM");t.a=function(e,t){return function(n,o,a){if(e.selectInitialFetchStatus(o())===r.a.LOADING)return Promise.resolve();var i=e.selectTimeline(o());return n(e.deleteTimeline()),n(e.fetchInitial(t)).catch((function(t){if(!i||e.selectUnavailableReason(o()))return Promise.reject(t);n(e.restoreTimeline(i))}))}}},"AEu/":function(e,t,n){"use strict";n.r(t);var r=n("PJYZ"),o=n.n(r),a=n("VbXa"),i=n.n(a),c=n("lSNA"),s=n.n(c),l=n("ERkP"),d=n("es0u"),u=(n("NlgC"),n("oEGd")),p=n("0KEI"),f=n("hqKg"),h=n("8Lfv"),m=n("G6rE"),w=Object(f.createSelector)((function(e,t){return t.match.params.screenName}),(function(e,t){return t.match.params.statusId}),(function(e,t){return"PUSH"===t.history.action}),m.e.selectLoggedInUser,(function(e,t,n,r){return{loggedInScreenName:r?r.screen_name:void 0,screenName:e,statusId:t,isForwardNavigation:n}})),T={createLocalApiErrorHandler:Object(p.b)("HIDDEN_REPLIES_PAGE"),clearTimelineCache:function(e){return Object(h.a)(e)}},v=Object(u.g)(w,T),g=n("7JQg"),b=n("xZXe"),y=n("QIgh"),_=n("8UdT"),I=n("IcAo"),C=n("VrCx"),E=n("yy6l"),x=function(e){return Object(E.a)({component:b.a,createAdditionalProps:function(){return{withUnhideReply:e}},displayBlocked:!0,divider:{top:!0,bottom:!0}})},O=n("WU0f"),R=n("yoO3"),S=n("IG4P"),P=n("fTQJ"),A=n("VS6U"),j=n("t62R"),L=n("FIs5"),N=n("I7xG"),F=n("3XMw"),k=n.n(F);n.d(t,"ConversationHiddenRepliesScreen",(function(){return W}));var M=k.a.f8bf99e2,U=k.a.e001fce2,D=k.a.f7462e22,H=k.a.h73926af,B=l.createElement(k.a.I18NFormatMessage,{$i18n:"c774be45"},l.createElement(j.b,{link:"https://help.twitter.com/using-twitter/mentions-and-replies#hidden-reply"},k.a.fa1e6c45)),V=function(){return l.createElement(L.a,{header:H,message:B})},W=function(e){function t(t){var n;return n=e.call(this,t)||this,s()(o()(n),"_getModule",Object(N.a)(o()(n),(function(e){return e.statusId}),(function(e){return Object(O.a)(e)}))),n._clearTimelineCache(),n}i()(t,e);var n=t.prototype;return n.render=function(){var e=this.props,t=e.history,n=e.location,r=e.loggedInScreenName,o=e.screenName,a=e.statusId;return o&&a?l.createElement(R.a,null,l.createElement(A.a,{backLocation:"/"+o.toLowerCase()+"/status/"+a,history:t,location:n,primaryContent:this._renderPrimaryContent(),sidebarContent:l.createElement(d.a,null),subtitle:o===r?U:D({screenName:o}),title:M})):null},n._renderPrimaryContent=function(){var e,t,n,r,o=this.props,a=o.loggedInScreenName,i=o.screenName;return l.createElement(P.a,{entryConfiguration:(e={withUnhideReply:i===a},r=e.withUnhideReply,Object(I.a)({},y.b,((n={})[_.a.Tweet]={handlers:(t={},t[C.a.Tweet]=x(r),t)},n))),module:this._getModule(),refreshControl:S.a,renderEmptyState:V,title:M})},n._clearTimelineCache=function(e){void 0===e&&(e=this._getModule());var t=this.props,n=t.clearTimelineCache,r=t.createLocalApiErrorHandler;t.isForwardNavigation&&n(e).catch(r({}))},t}(l.Component);t.default=Object(g.d)({page:"tweet",section:"moderated_replies"})(v(W))},AUxQ:function(e,t,n){"use strict";var r=n("PJYZ"),o=n.n(r),a=n("VbXa"),i=n.n(a),c=n("lSNA"),s=n.n(c),l=n("PiaM"),d=n("ERkP"),u=n("rxPX"),p=Object(u.a)().propsFromState({isTimelineTerminatedAtTop:function(e,t){var n=t.module.selectTimeline(e);return!!n&&n.terminatedStatus.atTop},contextualClientEventInfo:function(e,t){return t.location.state&&t.location.state.contextualClientEventInfo}}),f=n("I7xG"),h=n("3XMw"),m=n.n(h),w=n("v6aA"),T=n("VTxf"),v=n("SrIh"),g=n("fTQJ"),b=n("IRWI"),y=n("wgnn"),_=n("yhJW"),I=m.a.gccad761,C=function(e){switch(e){case y.a.NOT_FOUND:return d.createElement(T.a,null);default:return Object(v.a)("Unhandled timeline unavailable reason: "+e),null}},E=function(){return d.createElement(T.a,null)},x=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,s()(o()(t),"_isInitialFocusEntry",(function(e,n){var r=t.props.focalTweetId;return n>0&&e&&e.content&&!!e.content.id&&e.content.id===r})),s()(o()(t),"_getPreprocessor",Object(f.a)(o()(t),(function(e){return e.socialContext}),(function(e){return e.contextTweetId}),(function(e){return e.contextualClientEventInfo}),(function(e){return e.promotedContent}),(function(e){return e.focalTweetId}),(function(e){return e.selectedTweet}),(function(e){return e.conversationTreeEnabled}),(function(e){return e.isTimelineTerminatedAtTop}),(function(e){return e.withFocalTweetMedia}),(function(e,t,n,r,o,a,i,c,s){return i?Object(_.a)({focalTweetId:o,contextTweetId:t,contextualClientEventInfo:n,socialContext:e,selectedTweet:a,promotedContent:r,isTimelineTerminatedAtTop:c,hideMedia:!s}):Object(_.c)({focalTweetId:o,contextTweetId:t,contextualClientEventInfo:n,socialContext:e,promotedContent:r})}))),s()(o()(t),"_getEntryConfig",Object(f.a)(o()(t),(function(e){return!!e.rootTweet&&e.rootTweet.user.id_str}),(function(e,t,n){return n.context.loggedInUserId}),(function(e){return e.withFocalTweetMedia}),(function(e,t,n){var r=t&&e&&t===e;return Object(_.b)({isCurrentUserRootAuthor:!!r,withFocalTweetMedia:n})}))),t}i()(t,e);var n=t.prototype;return n.render=function(){var e=this.props,t=e.apiErrorHandlerMap,n=e.fetchOptions,r=e.module,o=e.onEntriesUpdate;return d.createElement(g.a,{anchoring:b.a,apiErrorHandlerMap:t,entryConfiguration:this._getEntryConfig(),fetchOptions:n,isInitialFocusEntry:this._isInitialFocusEntry,module:r,olderAtTop:!0,onEntriesUpdate:o,preprocessEntryList:this._getPreprocessor(),previewEntries:this._previewEntries(),renderEmptyState:E,renderUnavailable:C,title:I})},n._previewEntries=function(){var e=this.props,t=e.conversationTreeEnabled,n=e.focalTweet;return n&&!t?[l.i({id:n.id_str,sortIndex:n.id_str})]:void 0},t}(d.Component);s()(x,"defaultProps",{withFocalTweetMedia:!0}),s()(x,"contextType",w.a);var O=p(x);t.a=O},DL4F:function(e,t,n){"use strict";n.r(t);n("PN9k"),n("yIC7");var r=n("PJYZ"),o=n.n(r),a=n("VbXa"),i=n.n(a),c=n("lSNA"),s=n.n(c),l=n("ERkP"),d=(n("VAZu"),n("NlgC"),n("zh9S")),u=n("oEGd"),p=n("0KEI"),f=n("hqKg"),h=n("XOJV"),m=function(e,t){return t.match.params.statusId},w=Object(f.createSelector)((function(e,t){return h.a.selectFetchStatus(e,m(0,t))}),m,(function(e,t){return h.a.selectHydrated(e,m(0,t))}),(function(e,t,n){return{fetchStatus:e,statusId:t,tweet:n}})),T={createLocalApiErrorHandler:Object(p.b)("CONVERSATION_ANALYTICS_SCREEN"),fetchTweetIfNeeded:h.a.fetchOneIfNeeded,scribeAction:d.c},v=Object(u.g)(w,T),g=n("7JQg"),b=n("1SjZ"),y=n("v//M"),_=n("W5XZ"),I=n("jHSc"),C=n("3XMw"),E=n.n(C),x=n("v6aA"),O=n("SrIh"),R=n("Rp9C"),S=n("bPFD"),P=n("rHpw");n.d(t,"ConversationAnalyticsScreen",(function(){return N}));var A=E.a.db722a73,j=E.a.ba56def2,L=E.a.j07decd3,N=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,s()(o()(t),"_handleFetchTweet",(function(){var e=t.props,n=e.createLocalApiErrorHandler;(0,e.fetchTweetIfNeeded)(e.statusId).catch(n(_.a))})),s()(o()(t),"_render",(function(){var e=t._getRetweetOrTweet();if(!e||e&&e.user.id_str!==t.context.loggedInUserId)return l.createElement(b.a,{onRetry:null,title:A});return l.createElement(S.a,{dangerouslyDisableSandbox:!0,onMessage:t._handleIFrameMessage,reportError:O.a,src:"/i/tfb/v1/quick_promote/lite/"+e.id_str,style:F.iframe})})),s()(o()(t),"_setAppBarRef",(function(e){t._appBarRef=e})),s()(o()(t),"_handleIFrameMessage",(function(e){if(e&&"quick_promote"===e.name)if("scribe"===e.type){var n=t.props,r=n.scribeAction,o=n.scribeNamespace,a=t._getRetweetOrTweet(),i=e.scribeData||{},c="string"==typeof i.component?i.component:"quick_promote",s="string"==typeof i.uiEvent?i.uiEvent:"";r(Object.assign({},o,{component:c,action:s}),Object.assign({},i,{items:a?[R.a.getTweetItem(a)]:[]}))}else"close"===e.type&&t._appBarRef&&t._appBarRef.goBack()})),t}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){this._handleFetchTweet()},n._getRetweetOrTweet=function(){return this.props.tweet&&this.props.tweet.retweeted_status||this.props.tweet},n.render=function(){var e=this.props,t=e.fetchStatus,n=e.history,r=e.location,o=this._getRetweetOrTweet();return l.createElement(I.b,{appBarRef:this._setAppBarRef,backLocation:o?o.permalink:"/",history:n,location:r,title:j},l.createElement(y.a,{fetchStatus:t,render:this._render,retryMessage:L}))},t}(l.PureComponent);s()(N,"contextType",x.a);var F=P.a.create((function(e){return{iframe:{flexGrow:1}}}));t.default=Object(g.d)({page:"tweet",section:"analytics"})(v(N))},HThR:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n("PJYZ"),o=n.n(r),a=n("VbXa"),i=n.n(a),c=n("lSNA"),s=n.n(c),l=n("ERkP"),d=n("wrlS"),u=n("v6aA"),p=n("RxYA"),f=function(e){function t(t,n){var r;r=e.call(this,t,n)||this,s()(o()(r),"_handleClose",(function(){r.setState({showLoginPrompt:!1})}));var a=!r.context.loggedInUserId&&d.a.hasValue("rweb_android_app_install_cta_v2_8497","app_install_once_per_week");return r.state={showLoginPrompt:a},r}return i()(t,e),t.prototype.render=function(){return this.state.showLoginPrompt?l.createElement(p.a,{isHalfSheet:!0,onClose:this._handleClose,onlyShowOnce:!0}):null},t}(l.Component);s()(f,"contextType",u.a)},W5XZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r,o=n("k49u"),a=n("fs1G"),i=((r={})[o.a.OtherUserSuspended]={customAction:a.a},r[o.a.StatusViewForbidden]={customAction:a.a},r)},bPFD:function(e,t,n){"use strict";var r=n("97Jx"),o=n.n(r),a=(n("PN9k"),n("1Pcy")),i=n.n(a),c=n("W/Kd"),s=n.n(c),l=n("KEM+"),d=n.n(l),u=n("ERkP"),p=n("6/RC"),f=n("rHpw"),h=(n("aWzz"),n("7DT3")),m=n.n(h),w=n("3xO4"),T=n.n(w),v=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=e.call.apply(e,[this].concat(r))||this,d()(i()(t),"_handleMessage",(function(e){var n=t.props,r=n.onMessage,o=n.forwardedRef,a=n.reportError;if(r&&("string"!=typeof e.data||0!==e.data.indexOf("setImmediate$"))){if(e.origin!==window.location.protocol+"//"+window.location.host)return a?a("Invalid cross-origin postMessage from "+e.origin):null;var i;if(o&&o.current&&o.current.contentWindow&&o.current.contentWindow===e.source)if(e.stopImmediatePropagation(),"string"==typeof e.data&&"undefined"!==e.data){try{i=JSON.parse(e.data)}catch(c){return void(a&&a("Invalid postMessage data from "+e.origin+": "+e.data))}r(i)}}})),t}s()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e;this.props.onMessage&&(e=this._handleMessage,p.canUseDOM&&window.addEventListener("message",e,!1))},n.componentWillUnmount=function(){var e;this.props.onMessage&&(e=this._handleMessage,p.canUseDOM&&window.removeEventListener("message",e,!1))},n.render=function(){var e=this.props,t=e.allowForms,n=e.dangerouslyDisableSandbox,r=e.src,o=e.style,a=e.title,i=m()("iframe",Object.assign({allow:"autoplay; fullscreen",allowFullScreen:!0,ref:this.props.forwardedRef,src:r,style:g.iframe,title:a},n?null:{sandbox:"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"+(t?" allow-forms":"")}));return u.createElement(T.a,{style:[g.root,o]},i)},t}(u.Component);v.propTypes={};var g=f.a.create((function(e){return{root:{overflow:"auto",WebkitOverflowScrolling:"touch"},iframe:{borderWidth:0,flexGrow:1}}}));t.a=u.forwardRef((function(e,t){return u.createElement(v,o()({forwardedRef:t},e))}))},ckGq:function(e,t,n){"use strict";var r=n("R972"),o=(n("ERkP"),n("6vad"));t.a=r.d(r.f({divider:{top:!0,bottom:!1},component:o.a,createProps:function(e){var t=e.entry.content;return{text:t.text,subtext:t.subtext,withBottomBorder:!1}}}))},rkhm:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("k49u"),o=n("fs1G"),a=n("LVU8"),i=function(e){var t;return void 0===e&&(e=""),(t={})[r.a.GenericNotFound]={customAction:o.a},t[r.a.NotAuthorizedToViewUser]={customAction:function(){Object(a.d)("/"+e,{statusCode:401})}},t[r.a.StatusViewForbidden]={customAction:function(){Object(a.d)("/"+e)}},t.showToast=!0,t}},yhJW:function(e,t,n){"use strict";n.d(t,"c",(function(){return _})),n.d(t,"a",(function(){return I}));n("PN9k");var r=n("R972"),o=n("PiaM"),a=n("xZXe"),i=n("P1oR"),c=n("VPAj"),s=n("QIgh"),l=n("8UdT"),d=n("zrc3"),u=n("caTy"),p=n("NO+D"),f=n("ckGq"),h=n("IcAo"),m=n("zh9S"),w=n("gdQ4"),T=n("yvCK"),v=n("euJ+"),g=n("VrCx"),b=n("yy6l"),y=n("G6rE");t.b=function(e){var t,n,o,d=e.isCurrentUserRootAuthor,_=e.withFocalTweetMedia;return Object(h.a)({},s.b,((o={})[l.a.Tweet]={handlers:(t={},t[g.a.Tweet]=Object(b.a)({component:a.a,createAdditionalProps:function(e,t,n){var r=n.applyFeedbackAction,o={};o.withHideReply=d,o.withUnhideReply=!1,o.withViewHiddenReplies=!0,o.withMuteConversation=!0;var a=!!(e.content&&e.content.hasModeratedReplies&&e.conversationPosition&&e.conversationPosition.isStart);return o.hasModeratedReplies=a,d&&(o.onTweetDismiss=function(){return r({entry:e,feedbackKeys:[v.d]})}),o}}),t[g.a.Focal]=Object(b.a)({component:i.a,createAdditionalProps:function(e,t,n){var r=n.applyFeedbackAction,o=e.content,a=o.hasModeratedReplies,i=o.tombstoneInfo,c=e.referringContext,s=e.conversationPosition,l=c||{},u=l.contextTweetId,p=l.socialContext,f=l.promotedContent,h=!!(a&&s&&s.isStart);return Object.assign({contextTweetId:u,hasModeratedReplies:h,socialContext:p,promotedContent:f,tombstoneInfo:i,withHideReply:d,withTweetMedia:_},d?{onTweetDismiss:function(){return r({entry:e,feedbackKeys:[v.d]})}}:{})},dismissable:!0,divider:function(e){return{top:!1,bottom:!1}}}),t)},o[l.a.Tombstone]={handlers:(n={},n.FocalTweetInlineTombstone=Object(p.a)({createAdditionalProps:function(e){var t=e.referringContext||{};return{contextTweetId:t.contextTweetId,isFocalTweet:!0,socialContext:t.socialContext,withHideReply:d}},shouldDisplayBorder:Object(c.a)(!0)}),n[T.a.Inline]=Object(p.a)({createAdditionalProps:function(e,t){var n=t.applyFeedbackAction;return{onTweetDismiss:d?function(){return n({entry:e,feedbackKeys:[v.d]})}:void 0,withHideReply:d}},shouldDisplayBorder:function(e){return!e||!e.conversationPosition||!!e.conversationPosition.isStart&&!!e.conversationPosition.isEnd}}),n)},o[l.a.Label]=f.a,o[l.a.TweetComposer]=r.d(r.f({component:w.a,bindActions:Object(c.a)({scribe:m.c}),selectData:function(e){e.entry,e.module;return{loggedInUser:function(e){return y.e.selectLoggedInUser(e)}}},createProps:function(e){var t=e.data.loggedInUser,n=void 0===t?{}:t,r=e.entry,o=e.actions.scribe,a=e.scribeNamespace,i=Object(u.a)(r.content.url.url);return{avatarUrl:n.profile_image_url_https,onClick:function(){return o(Object.assign({},a,{element:"add_to_thread",action:"click"}))},onImpression:function(){return o(Object.assign({},a,{element:"add_to_thread",action:"impression"}))},to:i?Object.assign({},i,{state:Object.assign({},i.state||{},{isSelfThreadReply:!0})}):void 0,userName:n.screen_name,withButton:!0,withConversationLine:r.withConversationLine}},shouldDisplayBorder:Object(c.a)(!1),divider:{top:!1,bottom:!0}})),o))};var _=function(e){var t=e.focalTweetId,n=e.contextTweetId,r=e.contextualClientEventInfo,o=e.socialContext,a=e.promotedContent,i=e.hideAncestorTweets,c=function(e){return e.type===l.a.Tweet&&e.content.id===t||e.type===l.a.Tombstone&&!!e.content&&!!e.content.tweet&&e.content.tweet.id===t};return function(e){var t=Object(d.a)(e,c),s=!1;return e.map((function(e,c){var d=c>t;if(e.type!==l.a.Tweet&&e.type!==l.a.Tombstone||d)return e;var u=!s;if(s=!0,c<t){if(i)return null;if(e.type===l.a.Tweet)return R(e,u);if(e.type===l.a.Tombstone)return S(e,u)}else{if(e.type===l.a.Tombstone){var p={isStart:u,isEnd:!0};return e.content.displayType===T.a.Inline?x({contextTweetId:n,entry:e,socialContext:o,conversationPosition:p}):O({entry:e,conversationPosition:p})}if(e.type===l.a.Tweet)return E({originalEntry:e,contextTweetId:n,contextualClientEventInfo:r,socialContext:o,promotedContent:a,conversationPosition:{isStart:u,isEnd:!0,position:"focal",showReplyContext:!1}})}})).filter(Boolean)}},I=function(e){var t=e.focalTweetId,n=e.contextTweetId,r=e.contextualClientEventInfo,o=e.socialContext,a=e.selectedTweet,i=e.promotedContent,c=e.isTimelineTerminatedAtTop,s=e.hideMedia;return function(e){return e.map((function(e,d){return e.type===l.a.Tombstone?e.content.displayType===T.a.Inline?x({contextTweetId:n,entry:e,socialContext:o}):O({entry:e}):e.type===l.a.TimelineModule?C({entry:e,referringContext:{focalTweetId:t,promotedContent:i,contextTweetId:n,contextualClientEventInfo:r,socialContext:o,hideMedia:s},selectedTweet:a,isRootEntryPresent:c}):e})).filter(Boolean)}},C=function(e){var t=e.entry,n=e.referringContext,r=e.selectedTweet,o=e.isRootEntryPresent,a=t.content||{};return Object.assign({},t,{referringContext:n,content:Object.assign({},a,{selectedTweet:r,showSmallAvatars:!0,isRootEntryPresent:o})})},E=function(e){var t=e.originalEntry,n=e.contextTweetId,r=e.contextualClientEventInfo,a=e.socialContext,i=e.promotedContent,c=e.conversationPosition;return o.f(Object.assign({},t,{conversationPosition:c,referringContext:{contextTweetId:n,contextualClientEventInfo:r,socialContext:a,promotedContent:i}}),{displayType:g.a.Focal})},x=function(e){var t=e.entry,n=e.contextTweetId,r=e.conversationPosition,a=e.socialContext;return o.f(Object.assign({},t,{conversationPosition:r,referringContext:{contextTweetId:n,socialContext:a}}),{displayType:"FocalTweetInlineTombstone"})},O=function(e){var t=e.entry,n=e.conversationPosition;return Object.assign({},t,{conversationPosition:n})},R=function(e,t){return Object.assign({},e,{conversationPosition:{isStart:t,isEnd:!1,position:"ancestor",showReplyContext:!1}})},S=function(e,t){return Object.assign({},e,{conversationPosition:{isStart:t,isEnd:!1,position:"ancestor"}})}},z4TA:function(e,t,n){"use strict";n.r(t);var r=n("pVnL"),o=n.n(r),a=(n("yIC7"),n("PN9k"),n("rmZQ"),n("LnO1"),n("3eMz"),n("dtAy"),n("PJYZ")),i=n.n(a),c=n("VbXa"),s=n.n(c),l=n("lSNA"),d=n.n(l),u=n("aeN7"),p=n("ERkP"),f=n("HThR"),h=n("es0u"),m=(n("T3IU"),n("DZyD"),n("NlgC"),n("zh9S")),w=n("1YZw"),T=n("oEGd"),v=n("0KEI"),g=n("hqKg"),b=n("8Lfv"),y=n("QK5w"),_=n("pNZL"),I=n("XOJV"),C=n("Mx3A"),E=n("P1r1"),x=function(e,t){return e.location&&e.location.state&&e.location.state[t]},O=function(e,t){var n=t.location,r=t.match;return r.params&&r.params.statusId?r.params.statusId:n.query&&n.query.tweet_id&&"string"==typeof n.query.tweet_id?n.query.tweet_id:""},R=Object(g.createSelector)(y.a,(function(e,t){return x(t,"contextTweetId")}),(function(e,t){return I.a.selectFetchStatus(e,O(0,t))}),(function(e,t){return"PUSH"===t.history.action}),(function(e,t){var n=t.location.query,r=Object(y.a)(e,t);return Object(C.c)({query:n,httpReferer:r?"":document.referrer||"",requestUrl:window.location.href}).referral_type===C.a.Web}),(function(e,t){var n=x(t,"referrer"),r=O(0,t);return!!n&&n.includes("/i/topics/tweet/"+r)}),(function(e,t){return x(t,"promotedContent")}),(function(e,t){return t.location.query&&"string"==typeof t.location.query.cxt?t.location.query.cxt:void 0}),(function(e,t){var n=O(0,t),r=I.a.selectHydrated(e,n);return r&&r.conversation_id_str?I.a.selectHydrated(e,r.conversation_id_str):null}),(function(e,t){return I.a.selectHydrated(e,O(0,t))}),(function(e,t){return t.location.pathname.indexOf("/intent/")>-1}),(function(e,t){return t.match.params.screenName}),(function(e,t){return x(t,"socialContext")}),O,E.h,(function(e,t){return x(t,"contextualClientEventInfo")}),_.a,(function(e,t,n,r,o,a,i,c,s,l,d,u,p,f,h,m,w){return{contextTweetId:t,conversationTreeEnabled:h,initialFetchStatus:n,isForwardNavigation:r,isInitialScreen:!e,isReferralSource:o,isReferredFromExploreTopics:a,promotedContent:i,richLandingContextId:c,rootTweet:s,focalTweet:l,isIntentRoute:d,screenName:u,socialContext:p,statusId:f,contextualClientEventInfo:m,tweetDetailNav:w}})),S={addToast:w.b,createLocalApiErrorHandler:Object(v.b)("CONVERSATION_SCREEN"),googleAnalyticsPageView:m.a,scribePageImpression:m.d,clearTimelineCache:function(e,t){return Object(b.a)(e,t)},updateSettings:E.E},P=Object(T.g)(R,S),A=n("ymux"),j=n("rkhm"),L=n("aHKU"),N=n.n(L),F=n("8UdT"),k=n("dwig"),M=n("wrlS"),U=n("kGix"),D=n("JyI6"),H=n("3XMw"),B=n.n(H),V=n("zOCl"),W=n.n(V),J=B.a.ad62343c,q=B.a.cf67b3f1,G=B.a.h6994d0e,K=function(e){var t=e.getLocationState,n=e.history;return p.createElement(D.a,{accessibilityLabel:J,getLocationState:t,history:n,icon:p.createElement(W.a,null),label:G,scribeComponent:"floating_reply_button",shortLabel:q})},X=n("iFPY"),Z=n("zb92"),z=Object(Z.a)({loader:function(){return Promise.all([n.e(2),n.e(3),n.e(191)]).then(n.bind(null,"uo3S"))},renderPlaceholder:function(e,t){return null}}),Q=n("mN6z"),Y=n("yoO3"),$=n("AUxQ"),ee=n("I7xG"),te=n("QIgh"),ne=n("VTxf"),re=n("SrIh"),oe=n("fTQJ"),ae=n("ZNT5"),ie=function(e){var t=e.richLandingContextId,n=e.statusId,r=t?n+"-"+t:n,o={refsrc_tweet:n,rux_cxt:t};return Object(ae.a)({timelineId:"rich-tweet-landing-"+r,getEndpoint:function(e){return e.URT.fetchRichTweetLandingTimeline},getEndpointParams:function(e){return Object.assign({},o,{},e)},context:"FETCH_RICH_TWEET_LANDING",perfKey:"rich-tweet-landing"})},ce=(n("aWzz"),n("wgnn")),se=function(e){switch(e){case ce.a.NOT_FOUND:return p.createElement(ne.a,null);default:return Object(re.a)("Unhandled timeline unavailable reason: "+e),null}},le=function(){return p.createElement(ne.a,null)},de=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=e.call.apply(e,[this].concat(r))||this,d()(i()(t),"_getModule",Object(ee.a)(i()(t),(function(e){return e.statusId}),(function(e){return e.richLandingContextId}),(function(e,t){return ie({statusId:e,richLandingContextId:t})}))),t}return s()(t,e),t.prototype.render=function(){var e=this.props.title;return p.createElement(oe.a,{entryConfiguration:te.b,module:this._getModule(),renderEmptyState:le,renderUnavailable:se,title:e})},t}(p.Component),ue=n("Rp9C"),pe=n("7JQg"),fe=n("uArA"),he=n("VS6U"),me=n("CK8+");n.d(t,"ConversationScreen",(function(){return ye}));var we=B.a.c6432564,Te=B.a.aacb5623,ve=B.a.d998faa7,ge={page:"tweet"},be={page:"tweet",section:"landing"},ye=function(e){function t(t){var n;return n=e.call(this,t)||this,d()(i()(n),"state",{selectedTweetId:void 0,focalTweetId:void 0}),d()(i()(n),"_handleTreeSwitchChange",(function(e){var t=n.props,r=t.addToast;(0,t.updateSettings)({conversationTreeEnabled:e}),e&&r({text:"Welcome to the new conversation tree!",autoDismissDelay:5e3,withClearButton:!0})})),d()(i()(n),"_getFabState",(function(){var e=n.props,t=e.promotedContent;return{inReplyToStatusId:e.statusId,promotedContent:t}})),d()(i()(n),"_isBucketedInRichTweetLandingExperiment",(function(){var e=n.props,t=e.isReferralSource,r=e.isReferredFromExploreTopics;return!(e.richLandingContextId||!t||r)&&M.a.isTrue("responsive_web_rich_tweet_landing_enabled")})),d()(i()(n),"_getNavigationParams",Object(ee.a)(i()(n),(function(e){return e.tweetDetailNav}),(function(e){return e.contextualClientEventInfo}),(function(e,t){var r,o;return n._navigationReferrerParamEnabled?{referrer:e,controllerData:e&&(null==t?void 0:null===(r=t.details)||void 0===r?void 0:null===(o=r.timelinesDetails)||void 0===o?void 0:o.controllerData)}:void 0}))),d()(i()(n),"_getApiErrorHandlerMap",Object(ee.a)(i()(n),(function(e){return e.screenName}),(function(e){return Object(j.a)(e)}))),d()(i()(n),"_getModule",Object(ee.a)(i()(n),(function(e){return e.statusId}),(function(e){return e.conversationTreeEnabled}),(function(e,t){return Object(A.a)({focalTweetId:e,conversationTreeEnabled:t})}))),d()(i()(n),"_handleEntriesUpdate",(function(e){var t=e.entries,r=e.fetchStatus,o=n.props.recordTTFL;if(r===U.a.FAILED&&(n._shouldRecordTTFL=!1),n._shouldRecordTTFL&&t.length){var a=t.some((function(e){return e.type===F.a.Tweet}));n._shouldRecordTTFL=!1,a&&o&&o("permalink")}})),d()(i()(n),"_shouldRedirectToCanonical",(function(){var e=n.props,t=e.focalTweet,r=e.screenName;return r&&t&&r.toLowerCase()!==t.user.screen_name.toLowerCase()})),d()(i()(n),"_redirectToCanonical",(function(){var e=n.props,t=e.history,r=e.location;t.replace({pathname:n._getCanonicalPath(),query:r.query,state:r.state})})),d()(i()(n),"_getCanonicalPath",(function(){var e=n.props.focalTweet;return e?"/"+e.user.screen_name+"/status/"+e.id_str:"/"})),d()(i()(n),"_getPathForTweetId",(function(e,t){return"/"+(t||"i")+"/status/"+e})),d()(i()(n),"_getScribeNamespace",(function(){return n._shouldRenderRichTweetLandingTimeline()?be:ge})),d()(i()(n),"_setSelectedTweetId",(function(e,t){n.setState({selectedTweetId:e});var r=n.props.location;window.history.replaceState(r.state,"",n._getPathForTweetId(e,t))})),d()(i()(n),"_setBackgroundClickHander",(function(){var e,t=n.props,r=t.focalTweet,o=null===(e=t.rootTweet||r)||void 0===e?void 0:e.conversation_id_str;o&&o!==n.state.selectedTweetId?document.addEventListener("click",n._handleBackgroundClick):document.removeEventListener("click",n._handleBackgroundClick)})),d()(i()(n),"_handleBackgroundClick",Object(fe.a)((function(e){var t,r=n.props,o=r.focalTweet,a=null===(t=r.rootTweet||o)||void 0===t?void 0:t.conversation_id_str;!e.defaultPrevented&&a&&n._setSelectedTweetId(a)}),'a, button, input, [role="button"], [id="layers"]')),n._shouldRecordTTFL=t.isInitialScreen,n._navigationReferrerParamEnabled=M.a.isTrue("navigation_stack_referrer_param_enabled"),n._isInlineReplyEnabled=M.a.isTrue("responsive_web_inline_reply_enabled"),n._isInlineReplyWithFabEnabled=M.a.isTrue("responsive_web_inline_reply_with_fab_enabled"),n}s()(t,e),t.getDerivedStateFromProps=function(e,t){return e.statusId!==t.focalTweetId?{focalTweetId:e.statusId,selectedTweetId:e.statusId}:t};var n=t.prototype;return n.shouldComponentUpdate=function(e,t){return!Object(Q.a)(e,this.props)||!Object(Q.a)(t,this.state)},n.componentDidMount=function(){var e=this.props,t=e.history,n=e.location,r=e.isForwardNavigation;!this._shouldRenderRichTweetLandingTimeline()||n.state&&n.state.isRichTweetLanding||t.replace(n,Object.assign({},n.state,{isRichTweetLanding:!0})),r&&this._clearTimelineCache()},n.componentWillUnmount=function(){document.removeEventListener("click",this._handleBackgroundClick)},n.componentDidUpdate=function(e,t){this._shouldRedirectToCanonical()?this._redirectToCanonical():(this.props.statusId!==e.statusId&&this.props.isForwardNavigation&&this._clearTimelineCache(),t.selectedTweetId===this.state.selectedTweetId&&e.rootTweet===this.props.rootTweet||this._setBackgroundClickHander())},n.render=function(){var e=this.props,t=e.conversationTreeEnabled,n=e.focalTweet,r=e.history,a=e.isIntentRoute,i=e.location,c=e.promotedContent,s=e.statusId,l=n?ve({tweetText:n.text,fullName:n.user.name}):void 0,d={items:[ue.a.forTweet(s,c)],tweet_id:s},u={canonical:"https://twitter.com"+(this._getCanonicalPath()||"")},h=M.a.isTrue("responsive_web_conversation_tree_toggle")?p.createElement(me.a,{accessibilityLabel:"Conversation Tree toggle",onValueChange:this._handleTreeSwitchChange,value:t}):void 0;return p.createElement(pe.c,{data:d,namespace:this._getScribeNamespace()},p.createElement(Y.a,null,p.createElement(N.a,o()({extend:!0},u)),p.createElement(he.a,{backLocation:"/",documentTitle:l,history:r,location:i,primaryContent:this._renderTimeline(),rightControl:h,sidebarContent:this._renderSidebarContent(),title:n&&n.self_thread?Te:we,withAppBarBorder:!t,withPrimaryHeader:!1,withSideBorders:!t}),a?p.createElement(X.a,{history:r,location:i,tweet:n}):p.createElement(f.a,null)))},n._renderSidebarContent=function(){var e=this.props.focalTweet;return e&&e.user.id_str?p.createElement(h.a,{withWhoToFollow:!1},p.createElement(z,{focalTweetId:e.id_str})):null},n._renderTimeline=function(){var e=this.props,t=e.conversationTreeEnabled,n=e.focalTweet,r=e.history,o=e.location,a=e.richLandingContextId,i=e.rootTweet,c=e.statusId,s=e.socialContext,l=e.promotedContent,d=e.contextTweetId,u={selectedTweetId:this.state.selectedTweetId,setSelectedTweetId:this._setSelectedTweetId},f=this._isInlineReplyEnabled&&!this._isInlineReplyWithFabEnabled?null:p.createElement(K,{getLocationState:this._getFabState,history:r});return p.createElement(k.a,{fab:f},this._shouldRenderRichTweetLandingTimeline()?p.createElement(de,{richLandingContextId:a,statusId:c,title:we}):p.createElement($.a,{apiErrorHandlerMap:this._getApiErrorHandlerMap(),contextTweetId:d,conversationTreeEnabled:t,fetchOptions:this._getNavigationParams(),focalTweet:n,focalTweetId:c,location:o,module:this._getModule(),onEntriesUpdate:this._handleEntriesUpdate,promotedContent:l,rootTweet:i||void 0,selectedTweet:u,socialContext:s}))},n._shouldRenderRichTweetLandingTimeline=function(){var e=this.props,t=e.isReferredFromExploreTopics;return!!e.richLandingContextId||t||this._isBucketedInRichTweetLandingExperiment()},n._clearTimelineCache=function(e,t){void 0===e&&(e=this._getModule()),void 0===t&&(t=this._getNavigationParams());var n=this.props,r=n.clearTimelineCache,o=n.createLocalApiErrorHandler;r(e,t).catch(o(this._getApiErrorHandlerMap()))},t}(p.Component);d()(ye,"defaultProps",{recordTTFL:u.c});t.default=P(ye)}}]);
//# sourceMappingURL=https://ton.smf1.twitter.com/responsive-web-internal/sourcemaps/web/bundle.Conversation.0fcca9e4.js.map