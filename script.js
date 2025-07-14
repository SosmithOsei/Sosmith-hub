function getExplanation() {
  const input = document.getElementById("verseInput").value.toLowerCase();
  const output = document.getElementById("output");

  let explanation = "";

  if (input.includes("john 3:16")) {
    explanation = "John 3:16 means that God loves the world so much that He gave His only Son, Jesus, so anyone who believes in Him will have eternal life. It's about God's love and salvation.";
  } else if (input.includes("psalm 23")) {
    explanation = "Psalm 23 is about trusting God like a shepherd. He takes care of us, provides for us, and protects us, even in dark or scary times.";
  } else {
    explanation = "Sorry, I don't have an explanation for that verse yet. Try another or come back later!";
  }

  output.textContent = explanation;
  output.style.display = "block";
}