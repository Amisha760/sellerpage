import './css/Navbar.css'

function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light shadow sticky-top">
        <div className="container-fluid custom-margin" >
        <a className="navbar-brand" href="#"><img src="https://m.media-amazon.com/images/G/01/sell/images/logo-amazon-black.svg"></img></a>
        <a href="https://sellercentral.amazon.in/ap/signin?openid.return_to=https%3A%2F%2Fsellercentral.amazon.in%2Fsw%2Fin%2FINSSR%2Fstep%2FSignUp%3Fpassthrough%252Faccount%3Dsoa%26passthrough%252FsuperSource%3DOAR%26ref_%3Dsdin_soa_basC1%26passthrough%252FmarketplaceID%3DA21TJRUUN4KGV%26passthrough%252FinitialSessionID%3D261-2792832-2796003%26passthrough%252Fld%3Dinrgooginkenshoo_502X1070069_e_c_649523493292_asret__becomeC1%26productTier%3DSILVER%26productType%3DSellOnAmazon%26marketplaceId%3DA21TJRUUN4KGV%26redirectAP%3D1&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_sw_signup_in&openid.mode=checkid_setup&marketPlaceId=A21TJRUUN4KGV&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&ssoResponse=eyJ6aXAiOiJERUYiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiQTI1NktXIn0.S5XHGHhHefbc6caW2Fm2JnDHl62xCRu6FInhIN9zeB2xNHPOOo4MQg.5lMoUSgKWzQBmKPl.UtPLgccFbKbxbkLE98lQCJTfVyQ4eWVIw0MssH-8aEmngcJej2QYsRtHpndFL72PA0tRcRZBN3XvQNxMyMUbtQBktTNtKZ3BN0EwLtwFf42z6cNU8wEM5ZlOI0he11idjBGQ6Bio-vrBMvoAL_f5m69nngOQePp_o37Xqy6l3OfqJ1Yoz4Cl7MR44YoIh77ahZVvW3gLJJ8.KpVJBL0SFyCLcSH5yYvxxg">
            <button className="btn nav-btn" >Start Selling</button>
        </a>
        </div>
      </nav>
      </>
    );
}

export default Navbar;