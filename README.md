# edX platform CMS with `browser-sync`
A browser sync setup for CMS of edX platform 

##Why?
Modifying an Xmodule on edX platform is so painfully slow. I have no idea how edX developers can live with that!

To overcome this limitation I've created a two scripts to help me with my work.

##How to use it?
Clone this repo:

    $ git clone https://github.com/OmarIthawi/edx-platform-cms-browser-sync.git
    $ cd edx-platform-cms-browser-sync
    
Append the content of `cms_urls.py` to `edx-platform/cms/urls.py`:

    $ cat cms_urls.py >> path/to/edx-platform/cms/urls.py


Install the node.js depeneencies:

   $ npm install
   
Run the BrowserSync server:

   $ gulp


Run the cms server:
   $ paver devstack studio
