async function getExplanation() {
  const input = document.getElementById("verseInput").value.trim().toLowerCase();
  const output = document.getElementById("output");

  if (!input) {
    output.textContent = "Please enter a Bible reference like 'John 3:16'.";
    output.style.display = "block";
    return;
  }

  output.innerHTML = "<span class='loading'>Loading verse...</span>";
  output.style.display = "block";

  try {
    // Fetch verse text from Bible API
    const response = await fetch(`https://bible-api.com/${encodeURIComponent(input)}`);
    const data = await response.json();

    if (!data.text) {
      output.innerHTML = "Verse not found. Check your spelling and try again.";
      return;
    }

    const verseText = data.text.replace(/\n/g, "<br>");
    const verseRef = data.reference.toLowerCase();
    let explanation = "";

    // Your custom explanations
    if (verseRef.includes("john 3:16")) {
      explanation = "John 3:16 means that God loves the world so much that He gave His only Son, Jesus, so anyone who believes in Him will have eternal life. It's about God's love and salvation.";
    } else if (verseRef.includes("psalm 23")) {
      explanation = "Psalm 23 is about trusting God like a shepherd. He takes care of us, provides for us, and protects us, even in dark or scary times.";
    } else if (verseRef.includes("genesis 1:1")) {
      explanation = "Genesis 1:1 teaches that God created the heavens and the earth. It shows that God is the beginning of everything.";
    } else if (verseRef.includes("romans 8:28")) {
      explanation = "Romans 8:28 reminds us that God works all things together for good for those who love Him and are called according to His purpose.";
    } else if (verseRef.includes("proverbs 3:5")) {
      explanation = "Proverbs 3:5 encourages us to trust in God completely, not in our own understanding.";
    } else if (verseRef.includes("philippians 4:13")) {
      explanation = "Philippians 4:13 reminds us that with Christ, we can do all things, no matter how hard they seem.";
    } else if (verseRef.includes("matthew 6:33")) {
      explanation = "Matthew 6:33 tells us to seek God's kingdom and righteousness first, and everything else we need will be provided.";
    } else if (verseRef.includes("isaiah 41:10")) {
      explanation = "Isaiah 41:10 encourages us not to fear, because God is with us and will strengthen and help us.";
    } else {
      explanation = "Sorry, I don't have an explanation for that verse yet. You can ask a pastor below.";
    }

    // Final HTML output
    output.innerHTML = `
      <strong>${data.reference}</strong><br>
      <div id="verseText">${verseText}</div>
      <button class="listen-button" onclick="readVerse('${data.text.replace(/'/g, "\\'").replace(/\n/g, " ")}')">🔊 Listen</button>
      <br><br>
      <em><strong>Explanation:</strong> ${explanation}</em>
    `;
    output.scrollIntoView({ behavior: "smooth" });

  } catch (error) {
    output.innerHTML = "An error occurred while fetching the verse. Please try again.";
  }
}