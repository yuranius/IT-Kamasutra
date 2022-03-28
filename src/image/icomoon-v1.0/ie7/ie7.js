/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-queue_musictest': '&#xe900;',
		'icon-radiotest': '&#xe901;',
		'icon-video_librarytest': '&#xe902;',
		'icon-subscriptionstest': '&#xe903;',
		'icon-4ktest': '&#xe904;',
		'icon-clear_alltest': '&#xe905;',
		'icon-location_ontest': '&#xe906;',
		'icon-messagetest': '&#xe907;',
		'icon-mail_outlinetest': '&#xe908;',
		'icon-alternate_emailtest': '&#xe909;',
		'icon-scoretest': '&#xe90a;',
		'icon-crop_originaltest': '&#xe90b;',
		'icon-filter_nonetest': '&#xe90c;',
		'icon-tunetest': '&#xe90d;',
		'icon-wb_iridescenttest': '&#xe90e;',
		'icon-add_photo_alternatetest': '&#xe90f;',
		'icon-image_searchtest': '&#xe910;',
		'icon-local_convenience_storetest': '&#xe911;',
		'icon-local_floristtest': '&#xe912;',
		'icon-local_hospitaltest': '&#xe913;',
		'icon-rate_reviewtest': '&#xe914;',
		'icon-categorytest': '&#xe915;',
		'icon-appstest': '&#xe916;',
		'icon-canceltest': '&#xe917;',
		'icon-keyboard_controltest': '&#xe918;',
		'icon-more_verttest': '&#xe919;',
		'icon-arrow_back_iostest': '&#xe91a;',
		'icon-arrow_forward_iostest': '&#xe91b;',
		'icon-voice_chattest': '&#xe91c;',
		'icon-live_tvtest': '&#xe91d;',
		'icon-ondemand_videotest': '&#xe91e;',
		'icon-priority_hightest': '&#xe91f;',
		'icon-pie_chart_outlinedtest': '&#xe920;',
		'icon-bubble_charttest': '&#xe921;',
		'icon-show_charttest': '&#xe922;',
		'icon-notificationstest': '&#xe923;',
		'icon-notifications_nonetest': '&#xe924;',
		'icon-notifications_pausedtest': '&#xe925;',
		'icon-publictest': '&#xe926;',
		'icon-schooltest': '&#xe927;',
		'icon-sharetest': '&#xe928;',
		'icon-sentiment_neutraltest': '&#xe929;',
		'icon-sentiment_very_dissatisfiedtest': '&#xe92a;',
		'icon-sentiment_very_satisfiedtest': '&#xe92b;',
		'icon-thumb_down_alttest': '&#xe92c;',
		'icon-thumb_up_alttest': '&#xe92d;',
		'icon-check_boxtest': '&#xe92e;',
		'icon-check_box_outline_blanktest': '&#xe92f;',
		'icon-startest': '&#xe930;',
		'icon-star_outlinetest': '&#xe931;',
		'icon-account_boxtest': '&#xe932;',
		'icon-account_circletest': '&#xe933;',
		'icon-bookmark_outlinetest': '&#xe934;',
		'icon-cachedtest': '&#xe935;',
		'icon-deletetest': '&#xe936;',
		'icon-exit_to_apptest': '&#xe937;',
		'icon-facetest': '&#xe938;',
		'icon-favoritetest': '&#xe939;',
		'icon-favorite_outlinetest': '&#xe93a;',
		'icon-label_outlinetest': '&#xe93b;',
		'icon-languagetest': '&#xe93c;',
		'icon-perm_contact_calendartest': '&#xe93d;',
		'icon-perm_mediatest': '&#xe93e;',
		'icon-power_settings_newtest': '&#xe93f;',
		'icon-settingstest': '&#xe940;',
		'icon-fingerprinttest': '&#xe941;',
		'icon-delete_outlinetest': '&#xe942;',
		'icon-done_outlinetest': '&#xe943;',
		'icon-supervised_user_circletest': '&#xe944;',
		'icon-label_important_outlinetest': '&#xe945;',
		'icon-drive_file_rename_outlinetest': '&#xe946;',
		'icon-duotest': '&#xe947;',
		'icon-recommendtest': '&#xe948;',
		'icon-amp_storiestest': '&#xe949;',
		'icon-people_alttest': '&#xe94a;',
		'icon-housetest': '&#xe94b;',
		'icon-double_arrowtest': '&#xe94c;',
		'icon-bedtimetest': '&#xe94d;',
		'icon-location_pintest': '&#xe94e;',
		'icon-photo_camera_backtest': '&#xe94f;',
		'icon-photo_camera_fronttest': '&#xe950;',
		'icon-hometest': '&#xe951;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
