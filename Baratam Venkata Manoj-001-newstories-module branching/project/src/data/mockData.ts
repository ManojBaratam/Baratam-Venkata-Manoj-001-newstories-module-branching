// Mock data for story content

interface ChapterContent {
  title: string;
  text: string;
}

export const mockChapterContent: Record<number, ChapterContent> = {
  1: {
    title: "The Beginning",
    text: `The old mansion stood at the end of the winding road, its weathered façade a testament to centuries gone by. Thomas had heard the stories since childhood—tales of mysteries and strange occurrences that haunted the place like persistent ghosts. Yet here he was, drawn by curiosity and the peculiar letter that had arrived three days ago, inviting him to claim an inheritance from a great-uncle he'd never known.

    The journey had been long, taking him through small towns and landscapes that seemed increasingly detached from the modern world. As his car climbed the final hill, the mansion revealed itself against the twilight sky, windows gleaming with an amber light that suggested occupancy despite the rumors that no one had lived there for decades.`
  },
  2: {
    title: "The Arrival",
    text: `The gravel crunched beneath Thomas's shoes as he approached the grand entrance. The door—massive oak with intricate carvings of vines and strange symbols—stood slightly ajar, as if someone had been expecting him. A shiver ran down his spine, not entirely from the evening chill.

    "Hello?" His voice echoed in the entrance hall, bouncing off marble floors and a sweeping staircase that curved upward into shadow. No answer came, but somewhere in the depths of the house, he thought he heard movement—the soft shuffling of feet, perhaps, or the rustle of fabric.
    
    Thomas set down his small suitcase and ventured further inside. The interior was surprisingly well-kept, free of the dust and decay one might expect in an abandoned home. Oil paintings lined the walls, their subjects—stern-faced men and women in antiquated clothing—seeming to follow him with their eyes as he passed.`
  },
  3: {
    title: "The Choice",
    text: `A leather-bound journal lay open on a table in what appeared to be a study. The handwriting was cramped and hurried, the ink faded to a rusty brown. Thomas leaned closer, adjusting his glasses to make out the words:

    "It watches from the spaces between. It has always been here, waiting. The door must remain sealed."
    
    The last entry was dated just three weeks ago.
    
    A cold draft suddenly swept through the room, and Thomas looked up to see a narrow door set into the far wall—a door he was certain hadn't been there moments before. It was made of a dark wood he couldn't identify, with a simple brass handle that gleamed in the fading light.`
  }
};

// Mock content for branching paths
export const mockBranchContent: Record<string, string> = {
  'door': `Thomas hesitated for only a moment before curiosity overwhelmed caution. He approached the door, feeling the wood grow warmer beneath his fingertips as he grasped the handle. It turned with surprising ease.

  Beyond lay not another room, but a corridor that seemed to stretch impossibly far, its walls lined with the same strange symbols he'd noticed on the front door. The air here was different—heavier, charged with something he couldn't name.
  
  "Hello?" he called again, his voice sounding muffled and distant even to his own ears.
  
  A figure appeared at the far end of the corridor—too distant to make out clearly, but unmistakably waiting. It raised a hand in what might have been greeting or warning.
  
  Thomas took a deep breath and stepped through the threshold. The door swung shut behind him with a sound like a sigh.`,
  
  'no-door': `Something about the door—its sudden appearance, the warning in the journal—made Thomas step back. Ancient family home or not, there were too many unanswered questions. He turned away, deciding to explore the rest of the house first, to perhaps find the person who'd left the journal.

  As he reached the study's entrance, he heard it—a soft clicking sound, like a lock engaging. When he looked back, the door in the wall was gone, leaving only smooth paneling in its place.
  
  "You've made a wise choice," said a voice behind him.
  
  Thomas spun to find an elderly man standing in the hallway, leaning on a cane of polished dark wood. His eyes, bright and alert in a face mapped with wrinkles, studied Thomas with unmistakable approval.
  
  "Not everyone shows such restraint when faced with the unknown," the man continued. "You must be Thomas. I've been waiting for you."`
};

// Mock content for Chapter 4
export const mockChapter4Content: string = `The mansion revealed its secrets slowly over the following days. Thomas learned of his family's ancient pact, of guardians and gateways and responsibilities handed down through generations. The inheritance was more than property—it was a duty, a continuation of a vigil centuries old.

Whether through the mysteries beyond the door or the guidance of the old caretaker, Thomas found himself changed. The modern world he'd left behind seemed increasingly distant, its concerns trivial compared to the knowledge now in his possession.

At night, he would sometimes stand at the window of what was now his bedroom, looking out over the estate that stretched into shadow. Somewhere in those grounds, reality wore thin. And now, for better or worse, its protection was his charge.

"We all face such doors in life," the old caretaker had told him. "Physical or metaphorical, they offer transformation. The question is always the same—are we ready for what waits on the other side?"

Thomas didn't know the answer yet. But as he closed the journal—his journal now—and prepared to write his first entry, he realized that perhaps the answer mattered less than the willingness to face the question.`;