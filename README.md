<h1 align="center">
  Foveated Metamers Browser
</h1>

Browse natural and simulated foveated metamer images hosted on the Flatiron Institute compute cluster.

## Quick start

1.  **Start developing.**

    Navigate to the Flatiron cluster, clone this repo in your `mnt/home/<username>`, and start it up. 
    If you are not on the FI network, fire up that VPN.

    ```zsh
    npm install
    npm run dev
    ```

    You may also run the app locally and proxy requests to the live site:

    ```zsh
    npm run proxy
    npm run dev
    ```

2.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:3000/`

## Deploy

1. **Run the linters and prettifier**

   ```zsh
   npm run lint && npm run pretty
   ```

2. **Make the production build**

   ```zsh
   npm run build
   ```

3. Move the contents of `dist` to the ~/USERNAME/public_www/ folder

   Your project is now running at `https://flatironinstitute.org/~<username>

### Paul

- [x] Remove all Gamma Corrected Column and remove all values where Gamma Corrected = true
- [x] Gamma Slider: Liz to make the slider and give a stub function that WB can update.
- [ ] Tie the 50% gray to the gamma

### Billy

- Gamma Slider: Liz to make the slider and give a stub function that WB can update.
- Select all / deselect all -- for filter checkboxes
- Add sortby on table column heads -- not sure about this
- change image order to that found in paper, both for filter checkboxes and table rows
- Table: metadata def on hover or in filter area?
- Check pagination -- this appears to be working
- Check highlight -- this appears to be working

### Done:

- [x] Image zoom
- [x] Filter selection bug - Liz
- [x] Put site at /~wbroderick/metamers and a simple index.html with link to personal page and link to /metamers
- [x] Move slider and zoom to the top left
- [x] Top right button update link
- [x] Favicon
- [x] Fix slate to gray?
- [x] Move the about to the top then image then table.
- [x] Model: "" Target Image: "" Scaling Value: ""
- [x] Button
