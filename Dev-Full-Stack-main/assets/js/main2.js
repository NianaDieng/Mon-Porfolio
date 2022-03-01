var quotes=[
   {
       "contenue": "Le succès c'est d'avoir ce que vous désirez. Le bonheur c'est aimer ce que vous avez.",
       "Auteur":"~ H. Jackson Brown"},
       {
       "contenue":"Mieux vaut prendre le changement par la main avant qu'il ne nous prenne par la gorge.",
       "Auteur":"~Winston Churchill"},
       {
        "contenue": "Seuls ceux qui sont prêts à\
        prendre le risque d'une terrible défaite rencontreront\
        une formidable victoire.",
        "Auteur":" ~ Robert Kennedy"},
        {
         "contenue":"JE PEUX ACCEPTER L'ÉCHEC.\
        TOUT LE MONDE RATE QUELQUE CHOSE. MAIS JE NE PEUX PAS ACCEPTER DE\
        NE PAS ESSAYER.",
        "Auteur":" ~Michael Jordan"},
        {
        "contenue":"Je suis reconnaissant à tous ceux qui m'ont dit non.\
         C'est à grace à cux que je suis moi-même.",
         "Auteur": " ~ Albert Einstein"},
        {
        "contenue": "Le génie est fait d'un pour cent d'inspiration et de quatre-vingt-dix-neuf pour cent de transpiration.",
        "Auteur":"Thomas Edison" },
        {
            "contenue": "Contentez-vous d'agir et laissez les autres parler.",
            "Auteur":"Baltasar Gracian" },
            // 
            {
                "contenue":"Un rêve, se doit être plus grand et infini que des capacités humaines afin de continuellement approcher cet idéal et de développer une motivation infinie.",
                "Auteur":" Prospère Welyang"
            },
            {
                "contenue":"Si vous travaillez sur quelque chose qui vous tient vraiment à coeur, vous n'avez pas besoin d'être pousse. La vision vous attire.",
                "Auteur":"Steve Jobs"
            },
                {"contenue": "Celui qui déplace une montagne commence par déplacer de petites pierres.",
                "Auteur":"Confucius"
            },
               { "contenue":" Un pessimiste voit la difficulté dans chaque opportunité. un optimiste voit l'opportunité dans chaque difficulté.",
                "Auteur":"Winston Churchill" },
               { "contenue":"La seule limite à notre épanouissement de demain sera nos doutes d'aujourd'hui.",
                "Auteur": "Franklin Roosevelt"},
               { "contenue":"Les jours où le ciel est gris, le soleil n'a pas disparu à tout jamais.",
                "Auteur":"Arnaud Desjardins" },
                {"contenue":"La motivation financière, la détermination forte et l'aptitude commerciale sont les 3 devises pour se livrer à un trafic matériel.",
                "Auteur":"daudemay" },
                {"contenue":"La seule façon de faire du bon travail est d'aimer ce que vous faites. Si vous ne l'avez pas encore trouvé, continuez à chercher. Ne vous contentez pas.",
                "Auteur": "Steve Jobs"},
               { "contenue":"Peu importe d'où tu viens, avec de l'ambition et des actes tu peux devenir qui tu veux.",
                "Auteur":"Atrategies"},
                {"contenue":"Le bonheur est souvent la seule chose qu'on puisse donner sans l'avoir et c'est en le donnant qu'on l'acquiert.",
                "Auteur": "Voltaire"},
                {"contenue":"Croyez en vous, ceux qui doutent de vos capacités doivent être votre plus grande motivation vers la réussite.",
                "Auteur":"Aurore Le Goff" },
                {"contenue":"Le bonheur est souvent la seule chose qu'on puisse donner sans l'avoir et c'est en le donnant qu'on l'acquiert.",
                "Auteur":" Voltaire" },
                {"contenue":"  La plus grande erreur que vous puissiez faire, dans la vie, c'est d'avoir peur de faire des erreurs.",
                "Auteur":"John Fitzgerald Kennedy"},
                {"contenue":"La sagesse suprême, c'est d'avoir des rêves asse nds pour ne pas les perdre de vue pendant queles poursuit",
                "Auteur":"Francis Scott Fitzgerald" },
                {"contenue":" La meilleure façon de prédire l'avenir est de le créer.",
                "Auteur":" Peter Drucker"},
                {"contenue":"Point n'est besoin d'espérer pour entreprendre, ni de réussir pour persévérer.",
                "Auteur":" Alphonse de Lamartine" },
                {"contenue":"Quand quelqu'un vous aime, la façon dont il prononce votre nom est différente. Vous savez que votre nom est en sécurité dans sa bouche.",
                "Auteur": "Arisko D'Amour"},
                {"contenue":"Le plus grand échec est de ne pas avoir le courage d'oser.",
                "Auteur":"L'abbé Pierre"},
                {"contenue":" Croyez en vos rêves et ils se réaliseront peut-être. Croyez en vous et ils se réaliseront sûrement.",
                "Auteur":"Martin Luther King"},
                {"contenue":"Tout l'univers obéit à l'Amour; - Aimez, aimez, tout le reste n'est rien.",
                "Auteur":"Jean de La Fontaine" },
                {"contenue":" L'amour est une vapeur qui va du coeur à la tête, et rend frénétiques ceux qu'il possède.",
                "Auteur":"Karl Joseph von Firmian"}

            ];
            // let aleatoire = null;
            let tweet = "";
            let hashtag = "citation";

function getQuote(){
    var randomNumber= Math.floor(Math.random() *quotes.length);
    document.getElementById('proverbe').innerHTML= quotes[randomNumber].contenue;
    document.getElementById('auteur').innerHTML= quotes[randomNumber].Auteur;

}
 
// document.getElementById('twitter').addEventListener("click", function() {
//     tweet = twitter(citations[randomNumber], 140 - auteur.length - hashtag.length - 5);	//	- 5 => espace + "-"
//     window.open('https://twitter.com/intent/tweet?text=' + tweet + " - " + auteur + '&hashtags=' + hashtag, 'twitter', 'height=300, width=550, scrollbars=0, menubar=0');
// });

// function twitter(str, num) {
//   if (num <= 3) return str.slice(0, num).concat('...');
//   else if (num < str.length) return str.slice(0, num-3).concat('...');
//   return str;
// }















    
