
/**
 * @todo: document
 */

__extend__(HTMLFrameElement.prototype,{

    get contentDocument(){
        return this.contentWindow?
            this.contentWindow.document:
            null;
    },
    set src(value){
        var event;
        this.setAttribute('src', value);
        if (value && value.length > 0){
            //console.log('loading frame %s', value);
            Envjs.loadFrame(this, Envjs.location(value));
            
            //console.log('event frame load %s', value);
            event = this.ownerDocument.createEvent('HTMLEvents');
            event.initEvent("load", false, false);
            this.dispatchEvent( event, false );
        }
    }
    
});