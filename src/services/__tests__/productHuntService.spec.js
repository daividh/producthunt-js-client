import { getPosts } from '../productHuntService';
import { getHttp } from '@/services/httpService';

jest.mock('../httpService');

describe('getPosts', () => {
  beforeEach(() => {
    getHttp.mockClear();
  });

  it('should call correct URL', () => {
    getPosts(0);
    expect(getHttp).toHaveBeenCalledWith('/v1/posts');
  });
  it('should call correct URL with params', () => {
    getPosts(4);
    expect(getHttp).toHaveBeenCalledWith('/v1/posts?days_ago=4');
  });
});
