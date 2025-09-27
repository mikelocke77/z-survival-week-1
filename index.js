import { useEffect, useMemo, useState } from 'react';

const CONTENT = [
  { kind:'section', title:'SURVIVAL MANUAL: WEEK ONE', subtitle:'Ground Zero Field Guide — Mission Protocols', badge:'Week 1', body: (
    <div>
      <p>Survivors don’t wing it. They train. This book is your field manual for staying alive spiritually in a world that wants to chew up your faith. Each page will help you practice five commitments every true survivor needs. This isn’t about just “knowing stuff.” It’s about <b>living ready</b>.</p>
    </div>
  )},
  { kind:'section', title:'HOW TO USE THIS GUIDE', body:(
    <div>
      <ol className="list">
        <li><b>Daily drills.</b> Find a quiet corner — car ride, study hall, or bedroom — and claim it as your training ground.</li>
        <li><b>Personal focus.</b> Don’t just read. Engage. Talk with God. Ask questions. Push back if you need to.</li>
        <li><b>Deep dive.</b> God doesn’t measure you by head knowledge but by obedience. Survival = living it out.</li>
        <li><b>Deployment.</b> Use what you learn in conversations with friends and family. Survival skills aren’t for hiding — they’re for getting out into the world.</li>
      </ol>
    </div>
  )},
  { kind:'section', title:'Understanding Ground Zero', body:(
    <div>
      <p>Every epidemic has a <b>Ground Zero</b>. It’s the epicenter where it all began. For the world’s brokenness, that’s <b>Genesis 3</b>. More than a story about a snake and some fruit — it is the history of the fall of humankind.</p>
      <p>At Ground Zero, humanity turned from God. This is where <i>Sin</i> (rebellion against God, choosing self over Him) entered the world and infected everything. That’s why the world is both breathtaking and broken.</p>
      <p><b>Mission Objective:</b></p>
      <ul className="list">
        <li>What went wrong.</li>
        <li>How the disease spreads.</li>
        <li>Where the cure is found (<b>spoiler alert: in JESUS</b>).</li>
      </ul>
      <p>Remember: You didn’t ask for this war. But you’re in it. The question is, will you just survive, or will you live into the rescue mission of God?</p>
    </div>
  )},
  { kind:'day', title:'Day ONE — Trust God Is Who He Says He Is', subtitle:'Survival Skill', badge:'Day 1', body:(
    <div>
      <p><b>Ground Zero briefing:</b> The serpent whispered: “Did God really say…?” His first weapon was doubt. The lie was that God isn’t good, can’t be trusted, and is holding out on us. Our survival depends on recognizing the truth: <b>God is exactly who He reveals Himself to be</b>.</p>
      <p><b>Doctrine drop — God’s Character:</b> If He says He is love (<ScriptureLink refId="1 John 4:8">1 John 4:8</ScriptureLink>), then He is love. If He says He is good (<ScriptureLink refId="Psalm 136:1">Psalm 136:1</ScriptureLink>), then He is good.</p>
      <p><b>Check your gear (Scripture):</b></p>
      <ul className="list">
        <li>God is Love (<ScriptureLink refId="1 John 4:8">1 John 4:8</ScriptureLink>)</li>
        <li>God is Good (<ScriptureLink refId="Psalm 136:1">Psalm 136:1</ScriptureLink>)</li>
        <li>God is Life (<ScriptureLink refId="John 6:35">John 6:35</ScriptureLink>)</li>
        <li>God is Refuge & Strength (<ScriptureLink refId="Psalm 46:1">Psalm 46:1</ScriptureLink>)</li>
        <li>God is Judge (<ScriptureLink refId="Isaiah 33:22">Isaiah 33:22</ScriptureLink>)</li>
      </ul>
      <p><b>Survival Drill:</b> Which of the above verses connect with you the most today? Which is hardest to believe right now? Tell God about it and ask for help.</p>
    </div>
  )},
  { kind:'day', title:'Day TWO — Trust God Can Do What He Says', subtitle:'Survival Skill', badge:'Day 2', body:(
    <div>
      <p><b>Ground Zero briefing:</b> Eve said, “God said we’ll die if we eat this.” The serpent: “You won’t die.” In short: “God won’t keep His word.”</p>
      <ul className="list">
        <li>“Sin won’t really cost me.”</li>
        <li>“Obeying God won’t really work out.”</li>
      </ul>
      <p><b>Doctrine drop — God’s Sovereignty:</b> God is in full control; nothing can stop Him from keeping His promises.</p>
      <p><b>Scripture drill:</b> Read <ScriptureLink refId="Hebrews 11">Hebrews 11</ScriptureLink>. Faith means action.</p>
      <p><b>Survival Drill:</b> Where do you struggle to believe God will follow through? Write it down and bring it to Him.</p>
    </div>
  )},
  { kind:'day', title:'Day THREE — Believe I Am Who God Says I Am', subtitle:'Survival Skill', badge:'Day 3', body:(
    <div>
      <p><b>Ground Zero briefing:</b> Eve doubted God and herself. “Am I enough without this?” We still compare and perform to feel worthy.</p>
      <p><b>Doctrine drop — Identity in Christ:</b> Sin corrupts (<ScriptureLink refId="Jeremiah 17:9">Jeremiah 17:9</ScriptureLink>), but in Christ we’re made new (<ScriptureLink refId="2 Corinthians 5:17">2 Cor. 5:17</ScriptureLink>). Our worth is in Him.</p>
      <blockquote>“God made him who had no sin to be sin for us… so that in him we might become the righteousness of God.” (<ScriptureLink refId="2 Corinthians 5:21">2 Cor. 5:21</ScriptureLink>)</blockquote>
      <p><b>Survival Drill:</b> Pride, ego, insecurity = forgetting who we are in Christ. Pray: “God, help me believe I am who You say I am.”</p>
    </div>
  )},
  { kind:'day', title:'Day FOUR — Believe God’s Word is for Full Life', subtitle:'Survival Skill', badge:'Day 4', body:(
    <div>
      <p><b>Ground Zero briefing:</b> The enemy still asks, “Can you really trust the Bible?”</p>
      <p><b>Doctrine drop — Trustworthy Word:</b> God doesn’t lie (<ScriptureLink refId="Titus 1:2">Titus 1:2</ScriptureLink>), so His Word is trustworthy.</p>
      <blockquote>“If you hold to my teaching… you will know the truth, and the truth will set you free.” (<ScriptureLink refId="John 8:31-32">John 8:31–32</ScriptureLink>)</blockquote>
      <p><b>Survival Drill:</b> Read <ScriptureLink refId="Deuteronomy 6:4-9">Deuteronomy 6:4–9</ScriptureLink>. Where can you post Scripture today? Lock screen, mirror, group chat?</p>
    </div>
  )},
  { kind:'day', title:'Day FIVE — Enjoy God Being God', subtitle:'Survival Skill', badge:'Day 5', body:(
    <div>
      <p><b>Ground Zero briefing:</b> We try to run life ourselves. Even Christians turn faith into a checklist.</p>
      <p><b>Doctrine drop — Salvation & God’s Sovereignty:</b> We don’t rescue ourselves. God saves. We surrender and worship.</p>
      <blockquote>“Great is our Lord and mighty in power; his understanding has no limit.” (<ScriptureLink refId="Psalm 147:5">Psalm 147:5</ScriptureLink>)</blockquote>
      <p><b>Survival Drill:</b> Read Psalm 147. Write what makes you thankful God is God and you’re not. Take a walk and breathe.</p>
    </div>
  )},
];

function ScriptureLink({ refId, children }){
  const url = `https://www.biblegateway.com/passage/?search=${encodeURIComponent(refId)}&version=${encodeURIComponent('NIV')}`;
  return <a href={url} target="_blank" rel="noreferrer">{children}</a>;
}

function Page({ item }){
  return (
    <div className="card">
      <div className="sectionTitle">{item.title}{item.badge && <span style={{marginLeft:8, fontSize:10, color:'#555'}}>• {item.badge}</span>}</div>
      {item.subtitle && <div className="sectionSub">{item.subtitle}</div>}
      <div>{item.body}</div>
    </div>
  );
}

export default function Home(){
  const pages = useMemo(()=>CONTENT, []);
  const [index, setIndex] = useState(0);
  const [notes, setNotes] = useState(()=>{
    try { return JSON.parse(localStorage.getItem('notes')||'{}'); } catch { return {}; }
  });

  useEffect(()=>{ try{ localStorage.setItem('notes', JSON.stringify(notes)); }catch{} },[notes]);

  const cur = pages[index];
  const progressPct = ((index+1)/pages.length)*100;

  useEffect(()=>{
    const onKey = (e) => {
      if(e.key === 'ArrowRight') setIndex(i=>Math.min(pages.length-1, i+1));
      if(e.key === 'ArrowLeft') setIndex(i=>Math.max(0, i-1));
    };
    window.addEventListener('keydown', onKey);
    return ()=>window.removeEventListener('keydown', onKey);
  }, [pages.length]);

  return (
    <div className="container">
      <header className="header">
        <div>
          <div className="title">Keep Your Head</div>
          <div className="subtitle">Survival Manual — Week One</div>
        </div>
        <div className="hint">Page {index+1} / {pages.length}</div>
      </header>

      <div className="progress"><div style={{width: progressPct+'%'}}/></div>

      <Page item={cur} />

      {cur.kind === 'day' && (
        <div className="card">
          <label className="label">Journal / Field Notes</label>
          <textarea
            className="textarea"
            value={notes[cur.title] || ''}
            onChange={e=>setNotes(prev=>({...prev, [cur.title]: e.target.value}))}
            placeholder="Type your thoughts, prayers, or action plan…"
          />
          <div className="hint" style={{marginTop:6}}>Autosaved locally</div>
        </div>
      )}

      <div className="actions">
        <button className="btn" onClick={()=>setIndex(i=>Math.max(0, i-1))} disabled={index===0}>← Prev (or press <kbd>←</kbd>)</button>
        <button className="btn" onClick={()=>setIndex(i=>Math.min(pages.length-1, i+1))} disabled={index===pages.length-1}>Next → (or press <kbd>→</kbd>)</button>
      </div>

      <footer className="footer">
        Tip: Scripture references open in NIV on BibleGateway.
      </footer>
    </div>
  );
}
