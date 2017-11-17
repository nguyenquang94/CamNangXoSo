const Define = {
	base_url: "https://api.rss2json.com/v1/api.json?rss_url=",
	pp_client_id: 2,
	pp_client_secret: 'FKiBCPgHQhDf4APYG5CcaWnAgF6RkCkZPuogs77M',
	token: '',

	color_primary_dark: '#D32F2F',
	color_primary: '#F44336',
	color_primary_light: '#FFCDD2',
	color_text_primary: '#FFFFFF',
	color_accent: '#03A9F4',
	color_text: '#212121',
	color_text_secondary: '#757575',
	color_divider: '#BDBDBD',


	media: (id, width = false, height = false, style = 'scale_to_fill') => {
    	if (width == false || height == false)
    	{
    		return `${Define.base_url}/lbmedia/${id}`;
    	}
    	else
    	{
    		return `${Define.base_url}/lbmedia/${id}?width=${width}&height=${height}&style=${style}`;
    	}
    },
    url: (url) => Define.base_url + "/" + url,

    color_gray: '#9E9E9E',
    color_blue: '#398eb2',
    color_green: '#7b9317',
    color_orange: '#ffbf6b',
    color_red: '#96312e',

    status_color: (status_id) => {

        const list = [
        	Define.color_orange,
        	Define.color_blue,
        	Define.color_red,
        	Define.color_green,
            Define.color_gray,
        ];
        return list[status_id - 1];
    },
}

module.exports = { Define }
