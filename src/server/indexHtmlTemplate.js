export const indexHtmlTemplate = (content, token) => `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="https://icon-library.com/images/click-hand-icon/click-hand-icon-9.jpg">
  <title>New Blogger</title>
  <script src="/static/client.js" type="application/javascript"></script>
  <script>
    window.__token__ = '${token}'
  </script>


</head>

<body>
  <div id="react_root">${content}</div>
  <div id="modal_root"></div>
  <div id="dropdowmenu_root"></div>
</body>

</html>
`;
