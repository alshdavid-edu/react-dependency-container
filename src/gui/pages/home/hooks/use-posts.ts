import { useGlobalSelector } from "global-context";
import { State } from "~/gui/state";
import { useState } from "react";
import { env } from "~/gui/environment";

// This would be better kept in a package, but this serves to illustrate
// how the state selector works
export interface Post {
  id: string
  title: string
}

export const usePosts = () => {
  const httpClient = useGlobalSelector((ctx: State) => ctx.httpClient)
  const [ posts, setPosts ] = useState<Post[]>([])

  const fetchPosts = async () => {
    const results = await httpClient.get(env.POSTS_URL)
    setPosts(results.data)
  }

  return {
    posts,
    fetchPosts
  }
}
