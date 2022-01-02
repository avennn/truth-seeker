<head>
  <title>test</title>
  <script type="module">
    import { add } from '/public/add-esm.js';
    console.log(add(1, 2));
    console.log('import: ', import.meta.url);
  </script>
  <!-- <script>
    const { add } = require('/public/add.mjs');
    console.log(add(1, 2));
  </script> -->
</head>
<body>
  <p>hello world</p>
</body>
