const posts = [
    { title: 'Building Accessible UIs', year: 2024, link: '#' }
    // add more...
  ];
  export function Writing() {
    return (
      <section id="writing" className="py-20 px-8 max-w-3xl mx-auto">
        <h3 className="text-3xl font-semibold text-surface mb-8">Writing</h3>
        <ul className="space-y-4">
          {posts.map((p) => (
            <li key={p.title}>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-primary transition">
                <span className="text-lg">&#10148;</span>
                <span>{p.title} <small>({p.year})</small></span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  }