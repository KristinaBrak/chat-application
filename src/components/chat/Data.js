const messageData1 = [
  {
    id: '1',
    userId: '1',
    text: 'Wanna buy a cat?',
    createdAt: '2020-12-16T09:43:04.910Z',
  },
  {
    id: '2',
    userId: '2',
    text: 'Yeah, sure',
    createdAt: '2020-12-16T09:43:24.382Z',
  },
  {
    id: '3',
    userId: '1',
    text: 'Sweet',
    createdAt: '2020-12-16T09:43:31.986Z',
  },
];

const messageData2 = [
  {
    id: '5',
    userId: '1',
    text: 'Wanna see a trick?',
    createdAt: '2020-12-16T09:43:05.910Z',
  },
  {
    id: '6',
    userId: '3',
    text: 'No',
    createdAt: '2020-12-16T09:43:25.382Z',
  },
  {
    id: '7',
    userId: '1',
    text: ':(',
    createdAt: '2020-12-16T09:43:32.986Z',
  },
];

const chatsData = [
  {
    id: '1',
    messages: messageData1,
    isActive: false,
    userId: '1',
  },
  {
    id: '2',
    messages: messageData2,
    isActive: true,
    userId: '1',
  },
];

export default chatsData;
