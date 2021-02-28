const request = require('request');
const cheerio = require('cheerio');

const URL = "https://www.cgv.id/en/movies/info/21002000"; 
request(URL, function (err, res, body) {
    if(err)
    {
        console.log(err);
    }
    else
    {
        let $ = cheerio.load(body);
        $('div.main-container>div.main-wrapper>div.main-body-container.skin>div.body-wrapper>div.movie-detail-body').each(function(index){
            const title = $(this).find('div.movie-info-wrapper>div.movie-info-title').text();
            const synopsis = $(this).find('div.movie-info-wrapper>div.synopsis-section>div.movie-synopsis.right').text();
            const info = $(this).find('div.movie-info-wrapper>div.synopsis-section>div.movie-add-info.left').text();

            console.log(title,synopsis, info)
        });
    }
});
