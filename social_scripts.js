//These functions trigger share windows for Twitter and Facebook when a user clicks on an element assigned the noted class

    $(".icon-twitter").on("click", function(){

      var tweet = "Maryland Attorney General Brian Frosh uses newfound legal authority to sue the federal government"; //Tweet text
      var url = "http://cnsmaryland.org/interactives/fall-2018/frosh-lawsuits/index.html"; //Interactive URL

      var twitter_url = "https://twitter.com/intent/tweet?text="+tweet+"&url="+url+"&tw_p=tweetbutton";
      window.open(twitter_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;

    });


    $(".icon-facebook").on("click", function(){

      var picture = "http://cnsmaryland.org/interactives/fall-2018/facebook-thumb.psd"; //Picture URL
      var title = "Frosh's broad legal power: Partisanship or 'long overdue'?"; //Post title
      var description = "Maryland Attorney General Brian Frosh uses newfound legal authority to sue the federal government"; //Post description
      var url = "http://cnsmaryland.org/interactives/fall-2018/frosh-lawsuits/index.html"; //Interactive URL

        var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&link="+url+"&picture="+picture+"&name="+title+"&description="+description+"&redirect_uri=http://www.facebook.com";
      window.open(facebook_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;

    });
// JavaScript Document