window.addEventListener('load', function(){
	var html_textarea 	= document.getElementById('html_textarea'),
			generate				= document.getElementById('generate'),
			enabler 				= document.getElementById('enabler'),
			inpage					= document.getElementById('inpage'),
			expand					= document.getElementById('expand'),
			docType 		= '<!DOCTYPE html>\n',
			openHtml		= '<html lang="en">\n',
			openHead		= '<head>\n',
			metaChar		= '	<meta charset="UTF-8">\n',
			metaIEEdge	=	'	<meta http-equiv="X-UA-Compatible" content="IE=edge">\n',
			metaView		= '	<meta name="viewport" content="width=device-width, initial-scale=1">\n',
			title 			= '	<title>Enter Title Here</title>\n',
			styleSheet 	= '	<link rel="stylesheet" href="{Path to CSS/Stylesheet}">\n',
			enablerLink	= '	<script src="https://s0.2mdn.net/ads/studio/Enabler.js"></script>\n'
			scriptLink	= '	<script src="{Path to Javascript File}"></script>\n'
			closeHead		= '</head>\n',
			openBody 		= '<body>\n',
			openDiv			= '	<div id="container">\n',
			collapseDiv	= '		<div id="collapse_panel">\n 		</div>\n',
			expandDiv		= '		<div id="expand_panel">\n 		</div>\n',
			closeDiv 		= '	</div>\n'
			closeBody		= '</body>\n',
			closeHtml		= '</html>';

	generate.addEventListener('click', function(){
		if(!enabler.checked) {
			if(inpage.checked){
				html_textarea.value = docType   + openHtml  + openHead   + metaChar   + metaIEEdge +
												  		metaView  + title     + styleSheet + scriptLink + closeHead  +
												  		openBody  + openDiv		+ closeDiv   + closeBody  + closeHtml;
			} else if(expand.checked) {
				html_textarea.value = docType   + openHtml  + openHead    + metaChar   + metaIEEdge +
												  		metaView  + title     + styleSheet  + scriptLink + closeHead  +
												  		openBody  + openDiv		+ collapseDiv + expandDiv  + closeDiv   +
												  		closeBody + closeHtml;
			}
		} else {
			if(inpage.checked){
				html_textarea.value = docType   + openHtml  + openHead   + metaChar    + metaIEEdge +
												  		metaView  + title     + styleSheet + enablerLink + scriptLink +
												  		closeHead + openBody  + openDiv		 + closeDiv    + closeBody  +
												  		closeHtml;
			} else if(expand.checked) {
				html_textarea.value = docType   + openHtml  + openHead    + metaChar    + metaIEEdge +
												  		metaView  + title     + styleSheet  + enablerLink + scriptLink +
												  		closeHead + openBody  + openDiv		  + collapseDiv + expandDiv  +
												  		closeDiv  + closeBody + closeHtml;
			}
		}

	}, false)
});