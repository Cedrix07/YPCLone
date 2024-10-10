require 'test_helper'

class YellowPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get yellow_pages_index_url
    assert_response :success
  end

end
