export const resolveContext = (context = {}) => ({
  title: context.title || 'React base',
  description: context.description || 'React base',
  image: context.image || '',
})
