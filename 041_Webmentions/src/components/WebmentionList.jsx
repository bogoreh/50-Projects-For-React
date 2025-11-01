function WebmentionList({ webmentions }) {
  if (!webmentions.length) {
    return <p>No webmentions yet. Be the first to respond!</p>;
  }

  return (
    <div className="webmentions">
      <h3>Webmentions ({webmentions.length})</h3>
      <div className="webmention-list">
        {webmentions.map((mention) => (
          <div key={mention['wm-id']} className="webmention">
            <div className="webmention-meta">
              <strong>{mention.author?.name || 'Anonymous'}</strong>
              {mention.published && (
                <span> on {new Date(mention.published).toLocaleDateString()}</span>
              )}
            </div>
            <div className="webmention-content">
              {mention.content?.text && (
                <p>{mention.content.text}</p>
              )}
            </div>
            <div className="webmention-type">
              Type: {mention['wm-property']}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WebmentionList;