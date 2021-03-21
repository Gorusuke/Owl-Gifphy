

export default function useSEO({title, description}) {
  if(title === undefined){
    document.title = 'Owl Giphy'
  } else {
    document.title = `${title} | Owl Giphy`
  }

  const content = document.querySelector('meta[name="description"]')

  if(description === undefined){
    if(title === undefined){
      content.setAttribute('content', 'Owl Gifphy')
    } else {
      content.setAttribute('content', title)
    }
  } else {
    content.setAttribute('content', description)
  }
}