import React from 'react';
import './PostThank.css';

export function PostThank() {
    return (
        <section id="thank-cristina">
            <h2 className="block-title underline">Did You Find This Post Helpful?</h2>
            <div>
                <a href="https://www.buymeacoffee.com/cristinaruth" target="_blank" rel="noopener noreferrer" className="external-link"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style={{ height: "51px !important", width: "217px !important" }} /></a>
            </div>
            {
                //<!-- Begin Mailchimp Signup Form -->
            }


            <div id="mc_embed_signup">
                <form action="https://cristinaruth.us4.list-manage.com/subscribe/post?u=c1e0bb493382839c45ef5c62e&amp;id=da80066847" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                    <div id="mc_embed_signup_scroll">
                        <label htmlFor="mce-EMAIL">Learn and Grow from my Posts</label>
                        <input type="email" value="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
                        {
                            //<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                        }
                        <div style={{ position: "absolute", left: "-5000px;" }} aria-hidden="true"><input type="text" name="b_c1e0bb493382839c45ef5c62e_da80066847" tabIndex={-1} value="" /></div>
                        <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
                    </div>
                </form>
            </div>
            {
                //<!--End mc_embed_signup-->
            }
        </section>
    );
}