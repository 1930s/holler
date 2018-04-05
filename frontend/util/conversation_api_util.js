export const fetchConversations = () => (
  $.ajax({
    url: 'api/conversations',
    method: 'GET'
  })
);

export const fetchConversation = (id) => (
  $.ajax({
    url: `api/conversations/${id}`,
    method: 'GET'
  })
);

export const createConversation = (conversation) => (
  $.ajax({
    url: 'api/conversations',
    method: 'POST',
    data: { conversation }
  })
);

// BONUSES:

// export const updateConversation = (conversation) => (
//   $.ajax({
//     url: `api/conversations/${conversation.id}`,
//     method: 'PATCH',
//     data: { conversation }
//   })
// );

// export const deletePost = (id) => (
//   $.ajax({
//     url: `api/conversatons/${id}`,
//     method: 'DELETE'
//   })
// );
