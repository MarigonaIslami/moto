 // File Search
    let files = [];
    document.getElementById('fileInput').addEventListener('change', function(e) {
      files = Array.from(e.target.files);
    });

    function searchFiles() {
      let query = document.getElementById('searchBox').value.toLowerCase();
      let resultsDiv = document.getElementById('results');
      resultsDiv.innerHTML = "";
      let found = files.filter(f => f.name.toLowerCase().includes(query));
      if (found.length === 0) {
        resultsDiv.innerHTML = "No files found.";
      } else {
        let html = "";
        found.forEach(f => {
          html += "<div>" + f.name + "</div>";
        });
        resultsDiv.innerHTML = html;
      }
    }

    // FAQ toggle
    function toggleFAQ(el) {
      let answer = el.nextElementSibling;
      answer.style.display = (answer.style.display === "block") ? "none" : "block";
    }

    // Google Map
    let map;
    function initMap() {
      map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 42.88, lng: 20.86 }, // Mitrovicë
        zoom: 12,
        styles: [{ elementType: "geometry", stylers: [{ color: "#000000" }] }]
      });
    }

  function goMap() {
    let place = document.getElementById('mapSearch').value;
    alert("To search places, you need Google Maps Places API. For now, type your own!");
  }