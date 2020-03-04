/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */

 theme.tabsMetafields = new function() {

  function tabsMetafields() {

    // init default settings
    var settings = {
      tabs: '[data-tabs]',
      tabsLink: '[data-tabs-link]',
      tabsLinkSelector : 'tabsLink',
      tabsContent: '[data-tabs-content]',
      tabsContentSelector : 'tabsContent'
    };

    $(settings.tabsContent).each(function(i) {
      if ( i !== 0) {
       $(this).addClass('metafields__product--hide');
      }
    });

    $(settings.tabsLink).each(function(i) {
      if ( i === 0) {
       $(this).addClass('active');
      }
    });

    $(settings.tabsLink).on('click', function() {
    	var target = $(this).data(settings.tabsLinkSelector);

    	$(settings.tabsLink).removeClass('active');
    	$(settings.tabsContent).addClass('metafields__product--hide');

    	$(this).addClass('active');
    	$('[data-tabs-content=' + target + ']').removeClass('metafields__product--hide');
    })

  }
  return tabsMetafields;
}

var tabsMetafields = new theme.tabsMetafields();

theme.collapseFAQ = new function() {

 function collapseFAQ() {

   // init default settings
   var settings = {
     collapse: '[data-faq-collapse]'
   };

   $(settings.collapse).on("click", function() {
     $(this).toggleClass("active");
     var content = $(this).next();
     content.slideToggle(500);

   });

 }
 return collapseFAQ;
}

var collapseFAQ = new theme.collapseFAQ();
